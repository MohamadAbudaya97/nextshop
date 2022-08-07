
import IProdect,{IProdectInput} from '@Interface/prodect'
import {GQLgetProdects,GQLSetProdect,GQLDeleteProdect} from './prodect.gql'

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
        const { data,errors } = await Client.mutate({
            mutation:GQLSetProdect,
            variables:{"deleteProdectId":id}
        })
        console.log(errors)
        console.log(data)
    return data;
}




export const getPridectById=async (id:String)=>{

}

export const getPridectByName=async (name:String)=>{

}

export const updateProdect=async(id:String,req:IProdect)=>{

}