const fs = require('fs');
const express = require('express');
const cors = require('cors');
const path = require('cors');
const newslist = require('./datasources/newslist.js');

const app = express();
app.use(cors())

app.use("/dist", express.static("dist"));
app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.get("/newslist", (req, res) => {
  console.log(newslist);
  res.json(newslist);
});

app.listen(3000);
