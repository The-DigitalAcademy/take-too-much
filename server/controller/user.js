const User = require("../models/user")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


exports.register = async (req, res, next) => {
    const { name, password, email } = req.body
    if (password.length< 6) {
      return res.status(400).json({ message: "Password less than 6 characters" })
    };

    await User.create({
        name,
        password,
        email,
      }).then(User =>
        res.status(200).json({
          message: "User successfully created",
          User,
        })
      )
    };

