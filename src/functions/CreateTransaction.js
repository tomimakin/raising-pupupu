import { getToken } from "./IsValidToken";

const CreateTransaction = async(dets)=>{
    const usr = await getToken();
    if(!usr)return null;
    const response = await fetch(`${process.env.REACT_APP_API_URL}transaction`, {
        method: "POST",
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
export default CreateTransaction;