import {getPridectById,getPridectByName,getProdects} from '@Services/prodect.service'
import prodectType from '@Interface/prodect'
import {setProdect} from '@Interface/prodect'
const data:setProdect={
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
            return await getProdects();
        }
    },
    Mutation:{
            async setProdect(_,args){
                console.log(args.req[0])
                return args.req
            },
            async getProdectById(_,{id}){
                console.log(id)
            return await []
            },
            async getProdectByName(_,{name}){
                console.log(name)
                return await getPridectByName(name);
            }
    }
}