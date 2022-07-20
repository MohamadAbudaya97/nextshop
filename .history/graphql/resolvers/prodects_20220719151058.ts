import {getPridectById,getPridectByName} from '@Services/prodect.service'
export const prodectResolvers = {
   Mutation:{
        async getPridectById(_,{id}){
            console.log(id)
          return await []
        },
        async getPridectByName(_,{name}){
            return await getPridectByName(name);
        }
   }
}