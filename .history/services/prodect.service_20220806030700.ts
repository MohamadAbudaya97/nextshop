
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

        console.log(id)
        const { data:{deleteProdect} } = await Client.mutate({
            mutation:GQLSetProdect,
            variables:{"deleteProdectId": id} 
        })
    return deleteProdect;
}




export const getPridectById=async (id:String)=>{

}

export const getPridectByName=async (name:String)=>{

}

export const updateProdect=async(id:String,req:IProdect)=>{

}