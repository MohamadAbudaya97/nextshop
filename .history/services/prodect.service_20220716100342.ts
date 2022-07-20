import mongoose from 'mongoose'
import {connectMongo} from '@DBConnect'
import Products from '@Models/prodect.models'
connectMongo()
export const getData=async ()=>{
const data = await Products.find({})
return data
}