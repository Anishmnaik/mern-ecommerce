import mongoose from "mongoose"

const wishlistschema = new mongoose.Schema({
    productid:{
        type:String,
        require:true
    },
    productname:{
        type:String,
        require:true
    }

})

export const WISHLIST = mongoose.model("WISHLIST" , wishlistschema)