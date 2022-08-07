import {getPridectById,getPridectByName,getProdects,setProdect,updateProdect} from '@Services/prodect.service'
import prodectType from '@Interface/prodect'
import Iprodect from '@Interface/prodect'


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