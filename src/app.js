"use strict";
exports.__esModule = true;
var express = require("express");
// Our Express APP config
var app = express();
app.set("port", process.env.PORT || 3000);
// API Endpoints
app.get("/", function (req, res) {
    res.send("Hi");
});
// export our app
exports["default"] = app;
