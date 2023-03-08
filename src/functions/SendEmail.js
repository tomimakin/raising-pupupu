const SendEmail=(dets)=>{
    fetch(`${process.env.REACT_APP_API_URL}sendEmail`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dets),
    })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
}

export default SendEmail;