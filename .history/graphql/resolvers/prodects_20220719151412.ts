import {getPridectById,getPridectByName,getProdects} from '@Services/prodect.service'
export const prodectResolvers = {
    Query:{
        async products(_){
            return await getProdects();
        }
    },
    Mutation:{
            async getPridectById(_,{id}){
                console.log(id)
            return await []
            },
            async getPridectByName(_,{name}){
                console.log(name)
                return await getPridectByName(name);
            }
    }
}