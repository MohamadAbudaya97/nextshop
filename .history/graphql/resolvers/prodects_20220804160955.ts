import {getPridectById,getPridectByName,getProdects,setProdect,updateProdect} from '@Services/prodect.service'
import prodectType from '@Interface/prodect'
import Iprodect from '@Interface/prodect'
const data:Iprodect={
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
}]
}

export const prodectResolvers = {
    Query:{
        async products(_){
             return await getProdects()
        }
    },
    Mutation:{
            async setProdect(_,{req}){
                await setProdect(req as Iprodect)
                return req as Iprodect
            },
            async getProdectById(_,{id}){
            return await getPridectById(id)
            },
            async getProdectByName(_,{name}){
                return await getPridectByName(name);
            },
            async updateProdect(_,{id,req}){
                return await updateProdect(id,req)
            }
    }
}