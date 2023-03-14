import jwt from "jsonwebtoken";
import {getAuth} from "firebase-admin/auth";
import winston from "winston";
import {initializeApp, getApps} from "firebase-admin/app";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({format: winston.format.combine(winston.format.colorize(), winston.format.simple())}),
  ],
});

const validateToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token || token === null) {
    return res.status(403).send({message: "Unauthorized!"});
  }
  const decodedJwt = jwt.decode(token, {complete: true});
  const payload = decodedJwt.payload;

  const firebaseConfig = {
    projectId: payload.aud,
  };

  if (!getApps().length)initializeApp(firebaseConfig);
  
  getAuth().verifyIdToken(token).then(() => {
    return next();
  })
  .catch((error) => {
    logger.error("Error validating token: ", error);
    return res.status(401).send({message: "Unauthorized"});
  });
};

const validateOrigin = (req, res, next) => {
  const allwed = JSON.parse(process.env.ALLOWED_ORIGINS)
  if(allwed.includes(req.headers.origin))return next();
  return res.status(403).send({message: "Unauthorized!"});
}

const validators = {
  validateOrigin, validateToken
}

export default validators;