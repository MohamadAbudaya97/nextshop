
import IProdect,{IProdectInput} from '@Interface/prodect'
import {GQLgetProdects,GQLSetProdect,GQLDeleteProdect,GQLFindByIdProdect} from './prodect.gql'

import Client from '@Graphql/client'
export const GetProdects=async ()=>{

   const { data:{products} } = await Client.query({
        query:GQLgetProdects
    })
    console.log(products)
    return products;
}

export const setProdect=async (req:IProdectInput)=>{
    try{
        const { data:{setProdect} } = await Client.mutate({
            mutation:GQLSetProdect,
            variables:{"req": req} 
        })

        return setProdect;
    }catch(err){
        return {
            success: false,
            message: err.message
        }
    }
}


export const DeleteProdect=async (id:String)=>{
        const { data:{deleteProdect},errors } = await Client.mutate({
            mutation:GQLDeleteProdect,
            variables:{"deleteProdectId":id}
        })
        if(errors){
           return {
                success: false,
                message: errors
            }
        }else{
            return deleteProdect;
        }
}




export const getProdectById=async (id:String)=>{
        const { data:{getProdectById},errors } = await Client.mutate({
            mutation:GQLFindByIdProdect,
            variables:{"getProdectById":id}
        })
        if(errors){
           return {
                success: false,
                message: errors
            }
        }else{
            return getProdectById;
        }

}

export const getPridectByName=async (name:String)=>{

}

export const updateProdect=async(id:String,req:IProdect)=>{
        const { data:{updateProdect},errors } = await Client.mutate({
            mutation:GQLDeleteProdect,
            variables:{}
        })
        if(errors){
           return {
                success: false,
                message: errors
            }
        }else{
            return updateProdect;
        }
}