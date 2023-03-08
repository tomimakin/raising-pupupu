const WriteToSheets=(dets)=>{
    fetch(`https://sheetdb.io/api/v1/${process.env.REACT_APP_SHEETS_ID}`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.REACT_APP_SHEETS_TOKEN}`
        },
        body: JSON.stringify(dets),
    })
  .then((response) => response.json())
  .then(() => console.log("OK"));
}

export default WriteToSheets;
