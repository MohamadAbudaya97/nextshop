
import IProdect from '@Interface/prodect'
import { request, gql } from 'graphql-request'
import {GQLgetProdects} from './prodect.gql'
import Client from '@Graphql/client'
export const GetProdects=async ()=>{
   const { data:{products} } = await Client.query({
        query:GQLgetProdects
    })
    console.log(products)
    return products;
}

export const setProdect=async (req:IProdect)=>{
 
}

export const getPridectById=async (id:String)=>{

}

export const getPridectByName=async (name:String)=>{

}

export const updateProdect=async(id:String,req:IProdect)=>{

}