import Prodect from '@Models/prodect.models'
import IProdect from '@Interface/prodect'
import asd from '@Models/user.models'
export const getProdects=async ()=>{

const data = await Prodect.find<IProdect>({})
return data
}

export const setProdect=async (req:IProdect)=>{
const data= new Prodect(req)

//const data = await Prodect.create(req)
return await data.save()
}

export const getPridectById=async (id:String)=>{
const data = await Prodect.find({_id:id})
return data?data[0]:null
}

export const getPridectByName=async (name:String)=>{
const data = await Prodect.find({name:name})
return data?data[0]:null
}

export const updateProdect=async(id:String,req:IProdect)=>{
 const data =await Prodect.updateOne({_id:id},req)
 console.log(data)
 return req
}