
import IProdect from '@Interface/prodect'
import { useQuery, gql } from '@apollo/client';
import {GQLgetProdects} from './prodect.gql'
export const getProdects=async ()=>{

}

export const setProdect=async (req:IProdect)=>{
  const {} = useQuery<IProdect,IProdect>
}

export const getPridectById=async (id:String)=>{

}

export const getPridectByName=async (name:String)=>{

}

export const updateProdect=async(id:String,req:IProdect)=>{

}