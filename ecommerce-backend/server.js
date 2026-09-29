import express from "express";
import dotenv from "dotenv"
import { productroute } from "./routes/productsroute.js";
import { connectdb } from "./config/db.js";
import { authroute } from "./routes/authroute.js";
import cookies from"cookie-parser"
import cors from "cors"

dotenv.config()

const app = express();

connectdb();
app.use(cors())
app.use(express.json())
app.use(cookies())

app.use("/products", productroute)
app.use("/auth" , authroute)
app.use("/account" , accountroute)


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("server is live at port ", PORT)
})