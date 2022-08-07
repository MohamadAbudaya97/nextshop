import Products from '@Models/prodect.models'
import IProdect from '@Interface/prodect'

export const getProdects=async ()=>{

const data = await Products.find<IProdect>({})
return data
}

export const setProdect=async (req:IProdect)=>{
//const data= new Prodect(req)

//const data = await Prodect.create(req)
return await Products.create<IProdect>(req)
}

export const getPridectById=async (id:String)=>{
const data = await Products.find({_id:id})
return data?data[0]:null
}

export const getPridectByName=async (name:String)=>{
const data = await Products.find({name:name})
return data?data[0]:null
}

export const updateProdect=async(id:String,req:IProdect)=>{
 const data =await Products.updateOne({_id:id},req)
 console.log(data)
 return req
}