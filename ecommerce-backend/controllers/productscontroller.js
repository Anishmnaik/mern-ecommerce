import PRODUCT from "../models/productschema.js"

export const Products = async (req, res) => {
        const items = await PRODUCT.find()
        res.status(200).json({ message: "this is first product", items })
}

export const singleProduct = async (req, res) => {
        try {
                const id = req.params.id
                const sigleitem = await PRODUCT.find(id)
                res.status(200).json({ message: "this is first product", singleitem })
        }
        catch (error) {
                console.error("error in singleproduct ", error)
                res.status(500).send("internal error")
        }
}

export const NewProduct = async (req, res) => {
        try {
                const { productname, productdiscription, productprice, productpicture, distributername } = req.body;
                const newitem = PRODUCT({ productname, productdiscription, productprice, productpicture, distributername })
                const saveitem = await newitem.save();
                res.status(201).json({ message: "product added successfully - product details : ", saveitem })
        } catch (error) {
                console.error("error in newproduct controller : ", error)
                res.send(" internal server error ")
        }
}

export const UpdateProduct = async (req, res) => {
        try {
                const { productname, productdiscription, productprice, productpicture, distributername } = req.body;
                const updateitem = await PRODUCT.findByIdAndUpdate(req.params.id, { productname, productdiscription, productprice, productpicture, distributername })
                if (!updateitem) return res.status(404).json("item not found");
                res.status(404).json("item updated successfully - updated details : ", updateitem);
        } catch (error) {
                console.error("error in UpdateProduct controller : ", error)
                res.send(" internal server error ")
        }
}

export const DeleteProduct = async (req, res) => {
        try {
                const deleteditem = await PRODUCT.findByIdAndDelete(req.params.id)

                if (!deleteditem) return res.status(404).send("item not found")

                res.status(200).json(" item deleted successfully ")
        } catch (error) {
                console.error("error in DeleteProduct controller : ", error)
                res.send(" internal server error ")
        }
}