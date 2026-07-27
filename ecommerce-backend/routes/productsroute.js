import express from "express";
import { Product } from "../controllers/productscontroller.js";

export const productroute = express.Router();

productroute.get("/product" , Product)