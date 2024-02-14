const User = require("../models/user")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
    const { name, email, role, password } = req.body;
  
    if (password.length < 6) {
      return res.status(400).json({ message: "Password less than 6 characters" });
    }
  
    const user = await User.findOne({ email: req.body.email });
  
    if (user) {
      res.status(400).json({
        message: "User already exists",
      });
    } else {
      await User.create({
        name,
        email,
        role,
        password,
      }).then((user) =>
        res.status(200).json({
          message: "User successfully created",
          user,
        })
      );
    }
  };  


  





