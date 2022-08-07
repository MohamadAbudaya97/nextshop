import Products from '@Models/prodect.models'
import IProdect from '@Interface/prodect'
import dbConnect from '@DBConnect'
export const getProdects=async ()=>{
await dbConnect()
const data = await Products.find({})
return data
}

export const setProdect=async (req:IProdect)=>{
await dbConnect()
const newProdect = new Products(req)
return await newProdect.save()
}

export const getPridectById=async (id:String)=>{
await dbConnect()
const data = await Products.find({_id:id})
return data?data[0]:null
}

export const getPridectByName=async (name:String)=>{
await dbConnect()
const data = await Products.find({name:name})
return data?data[0]:null
}

export const updateProdect=async(id:String,req:IProdect)=>{
await dbConnect() 
 const data =await Products.updateOne({_id:id},req)
 console.log(data)
 return req
}