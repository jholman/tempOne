"use strict";

require('dotenv').config();
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";

const express = require("express");
const bodyParser = require("body-parser");

// stuff one
// stuff two

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static("public"));


app.get("/", (request, response) => {
  if (Math.random() > 0.5) {
    console.log("we got lucky");
    response.render("index");
  } else {
    res.status(500).send("oohhhhhh no");
  }
})


app.listen(PORT, () => console.log(`app up on port ${PORT}`));
