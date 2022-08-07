import mongoose from "mongoose";
const MONGODB_URI = process.env.MongoDb!
export const connectMongo = async ()=>mongoose.connect(MONGODB_URI)
