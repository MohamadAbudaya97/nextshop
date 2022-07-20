import {getPridectById,getPridectByName,getProdects} from '@Services/prodect.service'
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
}
}

export const prodectResolvers = {
    Query:{
        async products(_){
            return await getProdects();
        }
    },
    Mutation:{
            async setProdect(_,args){
                console.log(args)
                return "true"
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