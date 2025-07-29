import mongoose from "mongoose";
import app from "./app"
import dotenv from "dotenv"

dotenv.config();

const PORT = process.env.PORT || 3000;

async function main(){
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("MongoDB connected successfully")
        app.listen(PORT, ()=>{
            console.log(`Minimal library management system is running on : ${PORT}`)
        })
    } catch (error) {
        console.error("Failed to connect to MongoDB : ", error)
    }
}

main()