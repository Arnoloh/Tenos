const express = require('express');
const fs = require("fs")
const app = express();
const https = require('https');


const PORT = 4000
https
    .createServer(

        {
            key: fs.readFileSync("localhost.key"),
            cert: fs.readFileSync("localhost.crt")
        },
        app
    )
    .listen(PORT, () => {
        console.log(`Listening on part : ${PORT}`);
    });


app.post("/api/test", (req, res) => {
    console.log("test")
    res.sendStatus(200)
});
app.get("/", (req, res) => {
    res.send("Hey")
})