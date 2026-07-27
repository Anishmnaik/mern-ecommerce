import mongoose from "mongoose";

const productschema = new mongoose.Schema({
    productname:{
        type:String,
        require:true
    },
    productdiscription:{
        type:String,
        require:true
    },
    productprice:{
        type:Number,
        require:true
    },
    productpicture:{
        type:String,
        require:true
    },
    distributername:{
        type:String,
        require:true
    },


},{timestamps:true})

const PRODUCT = mongoose.model("PRODUCT" , productschema)
export default PRODUCT