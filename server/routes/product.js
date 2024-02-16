const express = require("express");
const routes = express.Router();

const {create } = require("../controller/product"); 

routes.post("/create", create);



module.exports = routes; 



