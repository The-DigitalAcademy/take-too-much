const express = require("express");
const routes = express.Router();

const {create, read} = require("../controller/product"); 

routes.post("/create", create);

routes.get("/all",read);




module.exports = routes; 



