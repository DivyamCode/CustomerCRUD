const express = require('express');
const bodyParser = require('body-parser');
const path = require("path")
const app = express();
const cookieparser = require('cookie-parser');

// var bodyParser = require('body-parser');
// // const errorMiddleware = require("./middleware/eror");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cookieparser());
// app.use(cors());



//Route imports
const Route = require("./routes/routes.js");


app.use("/api/v1/",Route);



module.exports = app;