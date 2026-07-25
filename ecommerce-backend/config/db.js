import mongoose from "mongoose"

export const connectdb = async ()=> {
try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log(" mongodb connected successfully ")
} catch (error) {
    console.error("error in mongodb connection : ",error)
    process.exit(1);
}
}