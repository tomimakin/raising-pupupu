import axios from "axios";

async function getContacts(apiToken, eventName) {
  const response = await axios.get(`https://api.givebutter.com/v1/contacts`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiToken}`
    }
  });
  
  return response.data.data;
}

async function addContact(apiToken, contactInfo) {
  const response = await axios.post(`https://api.givebutter.com/v1/contacts`, contactInfo, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiToken}`
    },

  });

  return response.data.data;
}

async function getCampaigns(apiToken) {
  const response = await axios.get(`https://api.givebutter.com/v1/campaigns`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiToken}`
    }
  });
  
  return response.data.data;
}

async function addCampaign(apiToken, campaignData) {
  const response = await axios.post(`https://api.givebutter.com/v1/campaigns`, campaignData, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiToken}`
    },

  });

  return response.data.data;
}

async function addTransaction(apiToken, campaignName, amount, transactionDetails) {
  const response = await axios.post(`https://api.givebutter.com/v1/campaigns/${campaignName}/transactions`, {
    data: {
      type: 'transaction',
      attributes: {
        amount: amount,
        ...transactionDetails
      }
    }
  }, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiToken}`
    }
  });

  return response.data.data;
}

export { getContacts, addContact, getCampaigns, addCampaign, addTransaction };