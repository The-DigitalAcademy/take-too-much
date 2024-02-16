const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(

    {
        name: {
            type: String,
            required: true
        },
     description:{
         type: String, 
         required:true
     }, 
     title:{
      type:String,

     }, 
     price:{
       type:Number, 
       required:true, 

     },
     discountPercentage:{
       type: Number, 
       required: true, 

     }, 
     rating:{

        type:Number, 
        required:true, 
     }, 
     stock:{

        type:Number, 
        required: true, 
     }, 
     brand:{
        type:String, 
        required: true, 

     }, 
     category:{
        type: String, 
        required: true, 


     }, 
     thumbnail:{
        type:String, 
        required: true, 
     }, 
     images: {
        type:[String], 
        required: true, 
     }
    }, 
)
module.exports = mongoose.model("products", productSchema);