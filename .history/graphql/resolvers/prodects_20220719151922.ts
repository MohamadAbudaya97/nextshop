import {getPridectById,getPridectByName,getProdects} from '@Services/prodect.service'
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