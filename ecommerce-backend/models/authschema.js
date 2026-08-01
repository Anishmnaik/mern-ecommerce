import mongoose from "mongoose";

const authschema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email : {
        type: String,
        require: true
    },
    password : {
        type: String,
        require: true
    },
    phonenumber : {
        type: Number,
        require: true
    },
    address : {
        type: String,
        require: true
    },
    city : {
        type: String,
        require: true
    },
    state : {
        type: String,
        require: true
    },
    pincode : {
        type: Number,
        require: true
    },
    country : {
        type: String,
        require: true
    }
})

const AUTH = mongoose.model("AUTH" , authschema)

export default AUTH