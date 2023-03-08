const GetCampaigns=async()=>{
    const res = await fetch(`${process.env.REACT_APP_API_URL}campaigns`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    if(res.ok)return await res.json();
    return [];
}
export default GetCampaigns;