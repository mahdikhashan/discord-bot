'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const Discord = require("discord.js")

const client = new Discord.Client()

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
  console.log("asdfasdf")
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => {
  res.json({ postBody: req.body })
  console.log("sdafsdf")
  console.log(req.body)

  client.on("message", msg => {
    if (msg.content === "ping") {
      msg.reply("pong");
    }
  })

});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.login("OTY5NjgzODA5ODk1MzI5ODgz.GqNc68.u2f5cKyqprjB-GRV-dCETpyYnKMuIoLaATJznU")

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
