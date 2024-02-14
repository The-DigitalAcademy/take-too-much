const User = require("../models/user")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
    try {
    const { name, email, role, password } = req.body;
    
    if (password.length < 6) {
        return res.status(400).json({ message: "Password less than 6 characters" });
    }
    if (!email || !password) {
        return res.status(400).json({
            message: "email or Password not present",
        })
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
        };
    }
    catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })
    }
}








exports.login = async (req, res) => {

    //Req email and password from the user. 

    const { email, password } = req.body

    // Check if username and password is provided

    if (!email || !password) {
        return res.status(400).json({
            message: "email or Password not present",
        })
    }

    try {
        const exists = await User.findOne({ email: req.body.email })

        // if(user.email){

        //   return res.status(400).json({
        //     message: "email or Password not present",

        // },

        // compare the hashed password with the one that the user has inserted// 

        const passwordMatch = await bcrypt.compare(req.body.password, exists.password)

        const user = new User({

            email,
            password: passwordMatch
        })

        await user.save()

        if (!passwordMatch) {
            res.status(401).json({

                message: "Login not successful",
                error: "User not found",
            })

        } else {

            const token = jwt.sign(
                {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                },
                process.env.JWT_SECRET,
                { expiresIn: '6h' }
            )

            res.status(200).json({
                message: "Login successful",
                User,
                token,
            })
        }
    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })
    }
}











