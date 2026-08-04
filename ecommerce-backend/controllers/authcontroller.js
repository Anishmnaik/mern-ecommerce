import jwt from "jsonwebtoken"
import AUTH from "../models/authschema.js"
import bcrypt from "bcrypt"


export const Data = async (req,res) => {
    try {
        const data = await AUTH.find()
        res.status(200).json({message : "register data",data})
        
    } catch (error) {
        console.error("error in data controller  : ",error )
        res.send("internal server error ")
    }
}

export const Register = async (req,res) => {
    try {
        const {username,email,password,phonenumber,address,city,state,pincode,country} = req.body
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password,salt)
        const register = new AUTH({username,email,password : hash,phonenumber,address,city,state,pincode,country})
        const save = await register.save()
        res.status(201).json({message : "registration successfull : ",save})
    } catch (error) {
        console.error("error in register controller : ",error)
        res.send(" internal server error ")
    }
}



export const UserLogin = async (req,res) => {
    try {
        const {login , password} = req.body
        const user = await AUTH.findOne({$or: [{username : login} ,{email  : login}]})
        if(!user) return res.status(404).send("please register")
           const passmatch = await bcrypt.compare(password , user.password)
        if(!passmatch) return res.status(404).send("incorrect username or password")
        const token = await jwt.sign(user.email , process.env.secret)
        res.cookie("token" , token )

        res.status(200).send("login successfull")
        } catch (error) {
        console.error("error in userlogin controller : ", error)
        res.status(500).send("internal server error")
    }
}