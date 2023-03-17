import { getToken } from "./IsValidToken";

const GetCampaigns=async()=>{
    const usr = getToken();
    const res = await fetch(`${process.env.REACT_APP_API_URL}campaigns`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": usr.token,
        }
    });
    if(res.ok)return await res.json();
    return [];
}
export default GetCampaigns;