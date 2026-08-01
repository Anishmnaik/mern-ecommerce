import express from "express"
import { Data, Register } from "../controllers/authcontroller.js";


export const authroute = express.Router();


authroute.get("/data" , Data  )
authroute.post("/register" , Register)


