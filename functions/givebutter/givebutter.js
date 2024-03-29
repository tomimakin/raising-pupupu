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

async function updateContact(apiToken, contactInfo) {
  const response = await axios.patch(`https://api.givebutter.com/v1/contacts/${contactInfo.id}`, contactInfo, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiToken}`
    },

  });

  return response.data.data;
}

async function deleteContact(apiToken, contactId) {
  const response = await axios.delete(`https://api.givebutter.com/v1/contacts/${contactId}`, {
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

async function updateCampaign(apiToken, campaignData) {
  const response = await axios.patch(`https://api.givebutter.com/v1/campaigns/${campaignData.id}`, campaignData, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiToken}`
    },

  });

  return response.data.data;
}

async function deleteCampaign(apiToken, campaignId) {
  const response = await axios.delete(`https://api.givebutter.com/v1/campaigns/${campaignId}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiToken}`
    },
  });

  return response.data.data;
}

async function addTransaction(apiToken, transactionDetails) {
  const response = await axios.post(`https://api.givebutter.com/v1/transactions`, transactionDetails, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiToken}`
    },
  });

  return response.data.data;
}

export { 
  getContacts, addContact, updateContact, deleteContact, 
  getCampaigns, addCampaign, deleteCampaign, updateCampaign, 
  addTransaction
};