import { getToken } from "./IsValidToken";

const GetContacts=async()=>{
    const usr = await getToken();
    if(!usr)return [];
    const res = await fetch(`${process.env.REACT_APP_API_URL}contacts`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": usr.token
        }
    });
    if(res.ok)return await res.json();
    return [];
}
export default GetContacts;