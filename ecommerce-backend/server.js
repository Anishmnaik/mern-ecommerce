import express from "express";
import dotenv from "dotenv"
import { productroute } from "./routes/productsroute.js";

dotenv.config()
const app = express();

app.use("/products",productroute)


const PORT = process.env.PORT

app.listen(PORT , () => {
    console.log("server is live at port ", PORT)
})