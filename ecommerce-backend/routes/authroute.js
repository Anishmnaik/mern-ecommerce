import express from "express"
import { Data, Register, UserLogin } from "../controllers/authcontroller.js";


export const authroute = express.Router();


authroute.get("/data" , Data  )
authroute.post("/register" , Register)
authroute.post("/login",UserLogin)

