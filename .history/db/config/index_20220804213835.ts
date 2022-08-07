import mongoose from "mongoose";
const MONGODB_URI = process.env.MongoDb!
export const connectMongo = async ()=>mongoose.connect("mongodb+srv://mohamadabudaya:Mohamad-11717805@shop.symii.mongodb.net/?retryWrites=true&w=majority")
/* This is a database connection function*/
import mongoose from 'mongoose'

const connection = {} /* creating connection object*/

async function dbConnect() {
  /* check if we have connection to our databse*/
  if (connection.isConnected) {
    return
  }

  /* connecting to our database */
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })

  connection.isConnected = db.connections[0].readyState
}

export default dbConnect

