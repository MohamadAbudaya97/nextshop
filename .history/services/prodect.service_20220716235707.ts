import mongoose from 'mongoose'
import {connectMongo} from '@DBConnect'
import Products from '@Models/prodect.models'
import ProdectType from '@Interface/prodect.type'
connectMongo()

export const getData=async ()=>{
const data = await Products.find({})
return data
}

export const setData=async ()=>{
const data = await Products.find({})
return data
}
