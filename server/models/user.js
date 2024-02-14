const mongoose = require("mongoose");
const bcrypt = require ("bcrypt")
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name:{
      type: String,  
     
    }, 
    password:{ 
    type: String, 
    required: true, 
    }, 
    role:{
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  ); 
  // this allow the user password to be hashed// 
  userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();

});
module.exports = mongoose.model("Users", userSchema);