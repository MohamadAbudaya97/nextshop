import {getPridectById,getPridectByName,getProdects,setProdect,updateProdect} from '@Services/prodect.service'
import prodectType from '@Interface/prodect'
import {setProdectType} from '@Interface/prodect'
const data:setProdectType={
name:"Prodect",
brand:"xzczxc",
colors:["asdasd"],
description:"sadasdasd",
details:["sadsadsadsad"],
inStock:"250",
other:[{
    title:"asdasd",
    description:"sadasdsad"
}],
price:{
    cost:"220",
    price:"280",
    discount:"5"
},
relatedProductsIds:["asdasdasd"],
sizes:["asdsad"],
SKU:"asdsad",
specification:[{
    details:"sadsad",
    prodectInformation:"asdasdsad"
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
                await setProdect(req as setProdectType)
                return req as setProdectType
            },
            async getProdectById(_,{id}){
            return await getPridectById(id)
            },
            async getProdectByName(_,{name}){
                return await getPridectByName(name);
            },
            async updateProdect(_,{id,req}){
                
            }
    }
}