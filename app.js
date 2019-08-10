const cowsay = require("cowsay");
const express = require('express');
const app = express();

const uniqueId = Math.ceil((Math.random() * 1000));
const port = 80;

const world = process.env.WORLD || "world"

app.get("/", function(req, res) {
    console.log(`Receiving request | uniqueId: ${uniqueId}`);
    res.setHeader('Content-Type', 'text/plain')
    res.send(cowsay.say({
        text : `Hello ${world}, My uniqueId is ${uniqueId}`,
        f: 'whale'
    }) + "\n");
});


console.log(`listening on ${port} | world: ${world} | uniqueId: ${uniqueId}`);
app.listen(port);
