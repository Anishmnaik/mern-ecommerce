import express from "express";
import dotenv from "dotenv"
import { productroute } from "./routes/productsroute.js";
import { connectdb } from "./config/db.js";
import { authroute } from "./routes/authroute.js";

dotenv.config()

const app = express();

connectdb();

app.use(express.json())

app.use("/products", productroute)
app.use("/auth" , authroute)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("server is live at port ", PORT)
})