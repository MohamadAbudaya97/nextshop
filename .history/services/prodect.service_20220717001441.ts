import mongoose from 'mongoose'
import {connectMongo} from '@DBConnect'
import Products from '@Models/prodect.models'
import ProdectType from '@Interface/prodect'
connectMongo()

export const getAllData=async ()=>{
const data = await Products.find({})
return data
}

export const setData=async (req:ProdectType)=>{
const data = await Products.create(req)
return data
}

export const getPridectById=async (id:String)=>{
const data = await Products.find({_id:id})
return data
}

export const getPridectByName=async (name:String)=>{
const data = await Products.find({name:name})
return data
}

