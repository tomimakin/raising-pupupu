import { getContacts, addContact, updateContact, deleteContact } from "./givebutter.js";
import winston from "winston";

const logger = winston.createLogger({
    transports: [
      new winston.transports.Console({format: winston.format.combine(winston.format.colorize(), winston.format.simple())}),
    ],
});

export async function contacts(req, res) {
  const eventName = "YOUR_EVENT_NAME_HERE";

  try {
    const contacts = await getContacts(process.env.GIVEBUTTER_TOKEN, eventName);
    res.status(200).json(contacts);
  } catch (error) {
    logger.error(error, "Error getting contacts");
    res.status(500).end();
  }
}

export async function addNewContact(req, res) {
    const contactInfo = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        emails: req.body.emails,
        tags: req.body.tags
    };

    addContact(process.env.GIVEBUTTER_TOKEN, contactInfo)
    .then(() => {
        res.status(200).send({message: "OK"});
    })
    .catch(error => {
        logger.error(error, "Error Adding Contact");
        res.status(500).end();
    });
}

export async function editContact(req, res) {
  const contactInfo = {
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    emails: req.body.emails,
    tags: req.body.tags
  };
  updateContact(process.env.GIVEBUTTER_TOKEN, contactInfo)
  .then(() => {
    res.status(200).send({message: "OK"});
  })
  .catch(error => {
    logger.error(error, "Error Editing Contact");
    res.status(500).end();
  });
}

export async function removeContact(req, res) {
  deleteContact(process.env.GIVEBUTTER_TOKEN, req.body.id)
  .then(() => {
    res.status(200).send({message: "OK"});
  })
  .catch(error => {
    logger.error(error, "Error Deleting Contact");
    res.status(500).end();
  });
}