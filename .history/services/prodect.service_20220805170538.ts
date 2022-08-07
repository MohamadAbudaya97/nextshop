
import IProdect from '@Interface/prodect'
import { useQuery, gql,cl } from '@apollo/client';
import {GQLgetProdects} from './prodect.gql'
export const GetProdects=async ()=>{
 const  {data,error,loading} = useQuery<IProdect[]>(
  gql`
    query{
    products {
        name,
        image,
        inStock
    }
    }
`
 );
 console.log(error)
 console.log(loading)
 console.log(data)
}

export const setProdect=async (req:IProdect)=>{
 
}

export const getPridectById=async (id:String)=>{

}

export const getPridectByName=async (name:String)=>{

}

export const updateProdect=async(id:String,req:IProdect)=>{

}