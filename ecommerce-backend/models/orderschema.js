import mongoose from "mongoose";

const orderschema = new mongoose.Schema({
   product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PRODUCT",
      require: true
   },
   productname: {
      type: String,
      require: true
   },
   price: {
      type: Number,
      require: true
   }
   ,
   paymentstatus: {
      type: String,
      require: true
   },
   deliverystatus: {
      type: String,
      require: true
   }
}, { timestamps })

export const ORDER = mongoose.model("ORDER" ,orderschema)