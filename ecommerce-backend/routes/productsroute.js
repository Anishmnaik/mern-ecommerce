import express from "express";
import { product } from "../controllers/productscontroller.js";

export const productroute = express.Router();

productroute.get("/product" , product)