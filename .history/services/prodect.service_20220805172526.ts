
import IProdect from '@Interface/prodect'
import { request, gql } from 'graphql-request'
import {GQLgetProdects} from './prodect.gql'
export const GetProdects=async ()=>{
    request("/qpi/graphql",GQLgetProdects).then((data) => console.log(data))
}

export const setProdect=async (req:IProdect)=>{
 
}

export const getPridectById=async (id:String)=>{

}

export const getPridectByName=async (name:String)=>{

}

export const updateProdect=async(id:String,req:IProdect)=>{

}