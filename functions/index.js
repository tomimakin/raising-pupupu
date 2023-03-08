import express from "express";
import winston from "winston";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import {addNewContact, contacts} from "./givebutter/contacts.js";
import {campaigns, addNewCampaign, addNewTransaction} from "./givebutter/campaigns.js";

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

app.post("/sendEmail", (req, res) => {
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

// let options = {
//     method: "GET",
//     headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${process.env.GIVEBUTTER_TOKEN}`
//     }
// };

// app.post("/campaign", (req, res) => {
//     options.method = "POST";
//     let jsonBody = {};
//     jsonBody.description = req.body.description;
//     jsonBody.end_at = req.body.end;
//     jsonBody.goal = req.body.goal;
//     jsonBody.subtitle = req.body.subtitle;
//     jsonBody.slug = req.body.slug;
//     jsonBody.title = req.body.title;
//     jsonBody.type = req.body.type;

//     options.body = JSON.stringify(jsonBody);

//     fetch("https://api.givebutter.com/v1/campaigns", options)
//     .then(response => response.json())
//     .then(response => res.send(response))
//     .catch(err => res.status(500).send(err));
// });

app.get("/campaigns", campaigns);
app.post("/campaign", addNewCampaign);

app.get("/contacts", contacts);
app.post("/contact", addNewContact);

app.post("/transaction", addNewTransaction);

app.get("/auth", (req, res) => {});

app.listen(port, () => {
    logger.info(`app listening on http://localhost:${port}`);
});