const Router = require("express");
const getIndexPage = require("../controllers/indePage.controllers.js");

let route = Router();
const indexroute = route.get("/", getIndexPage);

module.exports = indexroute;