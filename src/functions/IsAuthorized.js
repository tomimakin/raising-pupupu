import { getToken } from "./IsValidToken";

const IsAuthorized=async()=>{
    const usr = await getToken();
    if(!usr)return false;
    const res = await fetch(`${process.env.REACT_APP_API_URL}auth`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": usr.token,
        }
    });
    if(res.ok)return true;
    return false;
}
export default IsAuthorized;