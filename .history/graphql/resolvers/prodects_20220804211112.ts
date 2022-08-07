import Iprodect from '@Interface/prodect'
interface Test {
    name:String
}
const data:Iprodect[]=[{
name:"Prodect",
brand:"xzczxc",
description:"sadasdasd",
details:["sadsadsadsad"],
inStock:250,
other:[{
    title:"asdasd",
    description:"sadasdsad"
}],
price:{
    cost:220,
    price:280,
    discount:5
},
relatedProductsIds:["asdasdasd"],
specification:[{
    details:"sadsad",
    name:"asdasdsad"
}],
_id:"asdasd",
comments:[],
image:[],
rating:{average:0,five:0,for:0,three:0,tow:0,one:0,zero:0},
selected:[]
}]
const test:Test={
        name:"asdsad"
}
export const prodectResolvers = {
    Query:{
        async products(_){
            return data
            // return await getProdects()
        }
    },
    Mutation:{
            async setProdect(_,{req}){
              //  await setProdect(req as Iprodect)
                return data
            },
            async getProdectById(_,{id}){
            return await data
            },
            async getProdectByName(_,{name}){
                return await data
            },
            async updateProdect(_,{id,req}){
                return await data
            }
    }
}