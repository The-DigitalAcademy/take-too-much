const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  // requisting a user to enter the required information


  const { name, email, role, password } = req.body;

  //  condition to check if the password is less than 6

  if (password.length < 6) {
    return res.status(400).json({ message: "Password less than 6 characters" });
  }
  // condition to check if a password or email was entered.

  if (!email || !password) {
    return res.status(400).json({
      message: "email or Password not present",
    });
  }

  // condition to see if the entered email already exists in the DB.

  const user = await User.findOne({ email: req.body.email });

  try {
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
  } catch (error) {
    // error handling message //
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

//login

exports.login = async (req, res) => {
  //Req email and password from the user.

  const { email, password } = req.body;

  // Check if username and password is provided

  if (!email || !password) {
    return res.status(400).json({
      message: "email or Password not present",
    });
  }

  // to check to exist if the specific email exists
  try {
    const exists = await User.findOne({ email });

    if (!exists) {
      return res.status(400).json({
        message: "email or Password incorrect",
      });
    }

    // compare the hashed password with the one that the user has inserted//

    const passwordMatch = await bcrypt.compare(password, exists.password);
    if (!passwordMatch) {
      res.status(401).json({
        message: "Login not successful",
        error: "User not found",
      });

    } else {
      const token = jwt.sign(
        {
          _id: User._id,
          name: User.name,
          email: User.email,
          role: User.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "6h" }
      );

      res.status(200).json({
        message: "Login successful",
        User,
        token,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};
