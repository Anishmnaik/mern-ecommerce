import express from "express";
import { DeleteProduct, NewProduct, Products, singleProduct, UpdateProduct } from "../controllers/productscontroller.js";
import { authorization } from "../middelware/authmiddleware.js";

export const productroute = express.Router();

productroute.get("/products", authorization , Products)
productroute.get("/singleproduct", singleProduct)
productroute.post("/newproduct", authorization , NewProduct)
productroute.put("/updateproduct/:id", authorization , UpdateProduct)
productroute.delete("/deleteproduct/:id", authorization ,  DeleteProduct)