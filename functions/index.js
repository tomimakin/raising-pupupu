import express from "express";
import { createCanvas } from "canvas";

const app = express();
const port = 3000;

app.get("/captcha", (req, res) => {
    const length = 6;
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha = "";
    for (let i = 0; i < length; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    const canvas = createCanvas(120, 40);
    const context = canvas.getContext("2d");
    context.font = "bold 24px sans-serif";
    context.fillStyle = "#333";
    context.fillText(captcha, 10, 30);
  
    // Send the canvas as an image to the client
    const buffer = canvas.toBuffer();
    res.writeHead(200, {
        "Content-Type": "image/png",
        "Content-Length": buffer.length
    });
    res.end(buffer);
});

app.listen(port, () => {
    console.log(`Captcha app listening at http://localhost:${port}`);
});
