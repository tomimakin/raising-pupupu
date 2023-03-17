import express from "express";
import winston from "winston";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import {addNewContact, contacts, editContact, removeContact} from "./givebutter/contacts.js";
import {campaigns, addNewCampaign, editCampaign, removeCampaign, addNewTransaction} from "./givebutter/campaigns.js";
import auth from "./middleware/authorizeUser.js";
import functions from "firebase-functions";

const app = express();
const port = 3999;

app.use(express.json());

dotenv.config();

const corsOptions = {
    origin: JSON.parse(process.env.ALLOWED_ORIGINS),
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({format: winston.format.combine(winston.format.colorize(), winston.format.simple())}),
  ],
});

app.post("/sendEmail", [auth.validateOrigin], (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.ionos.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.SENDER_EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.message,
    };

    transporter.sendMail(mailOptions, (error)=> {
        if (error) {
            logger.error(error, "Error sending email");
            res.status(500).end();
        } else {
            logger.info("Email sent successfully.");
            res.status(200).send({message:"OK"});
        }
    });
});

app.get("/campaigns", [auth.validateOrigin], campaigns);
app.post("/campaign", [auth.validateOrigin], addNewCampaign);
app.patch("/campaign", [auth.validateOrigin, auth.validateToken], editCampaign);
app.delete("/campaign", [auth.validateOrigin, auth.validateToken], removeCampaign);

app.get("/contacts", [auth.validateOrigin], contacts);
app.post("/contact", [auth.validateOrigin], addNewContact);
app.patch("/contact", [auth.validateOrigin, auth.validateToken], editContact);
app.delete("/contact", [auth.validateOrigin, auth.validateToken], removeContact);

app.post("/transaction", [auth.validateOrigin, auth.validateToken], addNewTransaction);

app.get("/auth", [auth.validateOrigin, auth.validateToken], (req, res) => {
    res.status(200).end();
});

app.listen(port, () => {
    logger.info(`app listening on http://localhost:${port}`);
});


export const api = functions.https.onRequest(app);