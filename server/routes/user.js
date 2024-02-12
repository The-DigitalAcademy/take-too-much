const express = require("express");
const routes = express.Router();
const {
   register} = require("../controller/user");


routes.post("/register", register);
// routes.post("/login",login)

module.exports =routes; 