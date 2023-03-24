const SendEmail=async(dets)=>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}sendEmail`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dets),
    });
    if(response.ok)return "OK";
    return null;
}

export default SendEmail;