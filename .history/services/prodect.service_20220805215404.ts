
import IProdect from '@Interface/prodect'
import {GQLgetProdects,GQLSetProdect} from './prodect.gql'
import Client from '@Graphql/client'
export const GetProdects=async ()=>{
   const { data:{products} } = await Client.query({
        query:GQLgetProdects
    })
    console.log(products)
    return products;
}

export const setProdect=async (req:IProdect)=>{
    console.log(req)
    console.log({
    "name":"Prodect",
    "brand":"xzczxc",
    "description":"sadasdasd",
    "details":["sadsadsadsad"],
    "inStock":250,
    "other":[{
        "title":"asdasd",
        "description":"sadasdsad"
    }],
    "price":{
        "cost":220,
        "price":280,
        "discount":5
    },
    "relatedProductsIds":["asdasdasd"],
    "specification":[],
    "comments":[],
    "image":[],
    "rating":{"average":0,"five":0,"for":0,"three":0,"tow":0,"one":0,"zero":0},
    "selected":[]
  })
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

export const getPridectById=async (id:String)=>{

}

export const getPridectByName=async (name:String)=>{

}

export const updateProdect=async(id:String,req:IProdect)=>{

}