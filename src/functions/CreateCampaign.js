const CreateCampaign = async(dets, mtd)=>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}campaign`, {
        method: mtd,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(dets),
    });
    if(response.ok)return "OK";
    return null;
}
export default CreateCampaign;