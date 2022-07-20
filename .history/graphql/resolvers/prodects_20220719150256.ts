import {getPridectById} from '@Services/prodect.service'
export const prodectResolvers = {
   Mutation:{
        async findById(_,{id}){
                getPridectById(id)
        } 
   }
}