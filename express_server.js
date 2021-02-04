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
app.use(express.static("public"));


app.get("/", (request, response) => {
  response.render("index");
})


app.listen(PORT, () => console.log(`app up on port ${PORT}`));
