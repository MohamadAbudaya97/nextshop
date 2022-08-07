import mongoose from "mongoose";
const MONGODB_URI = process.env.MongoDb!
export const connectMongo = async ()=>mongoose.connect("mongodb+srv://mohamadabudaya:Mohamad-11717805@shop.symii.mongodb.net/?retryWrites=true&w=majority")

