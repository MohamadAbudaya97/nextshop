import {connectMongo} from '@DBConnect'
import Prodect from '@Models/prodect.models'
import ProdectType,{setProdectType} from '@Interface/prodect'
connectMongo()

export const getProdects=async ()=>{
const data = await Prodect.find({})
return data
}

export const setProdect=async (req:setProdectType)=>{
const data = await Prodect.create(req)
return data
}

export const getPridectById=async (id:String)=>{
const data = await Prodect.find({_id:id})
console.log(id)
console.log(data)
return data
}

export const getPridectByName=async (name:String)=>{
const data = await Prodect.find({name:name})
return data
}

