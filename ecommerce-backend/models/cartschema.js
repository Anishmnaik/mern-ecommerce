import mongoose from "mongoose";
const cartschema = new mongoose.Schema({
   productid : {
    type:String,
    require:true
   },
    productname: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
})

export const CART = mongoose.model("CART" , cartschema)