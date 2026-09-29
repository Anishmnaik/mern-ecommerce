import express from "express"

const accountroute = express.Router()

accountroute.post("/order")
accountroute.post("/cart:id")
accountroute.post("/wishlist:id")
accountroute.get("/orderdetails")
accountroute.get("/showcart")
accountroute.get("/showwishlist")
accountroute.delete("/order")
accountroute.delete("/cart:id")
accountroute.delete("/wishlist:id")