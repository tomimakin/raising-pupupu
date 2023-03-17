import RemoveCookie from "../hooks/RemoveCookie";

export const ClearCache = ()=>{
    localStorage.clear();
    caches.delete();
    RemoveCookie("usrin");
    window.location.reload();
    return;
}