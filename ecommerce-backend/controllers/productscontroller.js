import  PRODUCT  from "../models/productschema.js"

export const Product = async (req,res) =>  {
        const product = await PRODUCT.find()
        res.status(200).json({message:"this is first product",product})
}