import { getCampaigns, addCampaign, addTransaction, 
  updateCampaign, deleteCampaign
} from "./givebutter.js";
import winston from "winston";

const logger = winston.createLogger({
    transports: [
      new winston.transports.Console({format: winston.format.combine(winston.format.colorize(), winston.format.simple())}),
    ],
});

export async function campaigns(req, res) {
  try {
    const contacts = await getCampaigns(process.env.GIVEBUTTER_TOKEN);
    res.status(200).json(contacts);
  } catch (error) {
    logger.error(error, "Error getting campaigns");
    res.status(500).end();
  }
}

export async function addNewCampaign(req, res) {
  const campaignData = {
    description: req.body.description,
    goal: req.body.goal,
    title: req.body.title,
    type: req.body.type,
    // cover: "https://mdbootstrap.com/img/new/standard/city/044.webp"
  }
  addCampaign(process.env.GIVEBUTTER_TOKEN, campaignData)
  .then(() => {
    res.status(200).send({message: "OK"});
  })
  .catch(error => {
    logger.error(error, "Error Adding Campaign");
    res.status(500).end();
  });
}

export async function editCampaign(req, res) {
  const campaignData = {
    id: req.body.id,
    description: req.body.description,
    goal: req.body.goal,
    title: req.body.title,
    type: req.body.type,
  }
  updateCampaign(process.env.GIVEBUTTER_TOKEN, campaignData)
  .then(() => {
    res.status(200).send({message: "OK"});
  })
  .catch(error => {
    logger.error(error, "Error Editing Campaign");
    res.status(500).end();
  });
}

export async function removeCampaign(req, res) {
  deleteCampaign(process.env.GIVEBUTTER_TOKEN, req.body.id)
  .then(() => {
    res.status(200).send({message: "OK"});
  })
  .catch(error => {
    logger.error(error, "Error Deleting Campaign");
    res.status(500).end();
  });
}

export async function addNewTransaction(req, res) {
  const trans = {
    contact_id: req.body.contact_id,
    "first_name": "Dude",
    "last_name": "Makin",
    campaign_code: req.body.campaign_code,
    method: req.body.payment_method,
    amount: req.body.amount,
  }
  addTransaction(process.env.GIVEBUTTER_TOKEN, trans)
  .then(() => {
    res.status(200).send({message: "OK"});
  })
  .catch(error => {
    logger.error(error, "Error Adding Transaction");
    res.status(500).end();
  });
}

