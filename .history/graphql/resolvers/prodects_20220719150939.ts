import {getPridectById,getPridectByName} from '@Services/prodect.service'
export const prodectResolvers = {
   Mutation:{
        async getPridectById(_,{id}){
          return await getPridectById(id)
        },
        async getPridectByName(_,{name}){
            return await getPridectByName(name);
        }
   }
}