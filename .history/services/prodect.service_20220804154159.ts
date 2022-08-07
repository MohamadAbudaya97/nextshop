//import Prodect from '@Models/prodect.models'
import IProdect from '@Interface/prodect'

export const setProdect=async (req:IProdect)=>{
//const data = await Prodect.find({})

console.log(req)
}
/*
export const getProdects=async ()=>{
const data = await Prodect.find({})
return data
}




export const getPridectById=async (id:String)=>{
const data = await Prodect.find({_id:id})
return data?data[0]:null
}

export const getPridectByName=async (name:String)=>{
const data = await Prodect.find({name:name})
return data?data[0]:null
}

export const updateProdect=async(id:String,req:ProdectType)=>{
 const data =await Prodect.updateOne({_id:id},req)
 console.log(data)
 return req
}
*/