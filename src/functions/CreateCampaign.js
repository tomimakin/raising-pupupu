import { getToken } from "./IsValidToken";

const CreateCampaign = async(dets, mtd)=>{
    const usr = await getToken();
    const response = await fetch(`${process.env.REACT_APP_API_URL}campaign`, {
        method: mtd,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "x-access-token": usr.token
        },
        body: JSON.stringify(dets),
    });
    if(response.ok)return "OK";
    return null;
}
export default CreateCampaign;