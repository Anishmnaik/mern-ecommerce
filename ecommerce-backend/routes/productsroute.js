import express from "express";
import { DeleteProduct, NewProduct, Products, singleProduct, UpdateProduct } from "../controllers/productscontroller.js";

export const productroute = express.Router();

productroute.get("/products", Products)
productroute.get("/singleproduct", singleProduct)
productroute.post("/newproduct", NewProduct)
productroute.put("/updateproduct/:id", UpdateProduct)
productroute.delete("/deleteproduct/:id", DeleteProduct)