import {getPridectById,getPridectByName} from '@Services/prodect.service'
export const prodectResolvers = {
   Mutation:{
        async findById(_,{id}){
          return await getPridectById(id)
        },
        async findByName(_,{name}){
            return await getPridectByName;
        }
   }
}