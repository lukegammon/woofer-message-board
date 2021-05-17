const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 3000;


app.listen(process.env.PORT, console.log("'Server connected on port ${port}"));