import express from "express";
import dotenv from "dotenv"
import { productroute } from "./routes/productsroute.js";
import { connectdb } from "./config/db.js";

dotenv.config()

const app = express();

connectdb();

app.use(express.json())

app.use("/product", productroute)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("server is live at port ", PORT)
})