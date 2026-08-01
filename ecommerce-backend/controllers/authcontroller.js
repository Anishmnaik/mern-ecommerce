import AUTH from "../models/authschema.js"

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
        const register = new AUTH({username,email,password,phonenumber,address,city,state,pincode,country})
        const save = await register.save()
        res.status(201).json({message : "registration successfull : ",save})
    } catch (error) {
        console.error("error in register controller : ",error)
        res.send(" internal server error ")
    }
}



export const Login = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}