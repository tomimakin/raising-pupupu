import GetCookie from "../hooks/GetCookie";

export const getToken = async()=>{
    let idtoken = GetCookie("usrin");
    if(idtoken)idtoken = JSON.parse(idtoken);
    return idtoken;
}