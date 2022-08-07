
import type { NextApiRequest, NextApiResponse } from 'next'
import IProdect from '@Interface/prodect'
import {setProdect } from '@Services/prodect.service'
const  req:IProdect = {
    name:"Prodect",
    brand:"xzczxc",
    description:"sadasdasd",
    details:["sadsadsadsad"],
    inStock:250,
    other:[{
        title:"asdasd",
        description:"sadasdsad"
    }],
    price:{
        cost:220,
        price:280,
        discount:5
    },
    relatedProductsIds:["asdasdasd"],
    specification:[{
        details:"sadsad",
        name:"asdasdsad"
    }],
    _id:"asdasd",
    comments:[],
    image:[],
    rating:{average:0,five:0,for:0,three:0,tow:0,one:0,zero:0},
    selected:[]
    }
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(await setProdect({
    name:"Prodect",
    brand:"xzczxc",
    description:"sadasdasd",
    details:["sadsadsadsad"],
    inStock:250,
    other:[{
        title:"asdasd",
        description:"sadasdsad"
    }],
    price:{
        cost:220,
        price:280,
        discount:5
    },
    relatedProductsIds:["asdasdasd"],
    specification:[{
        details:"sadsad",
        name:"asdasdsad"
    }],
    comments:[],
    image:["sadasd"],
    rating:{average:0,five:0,for:0,three:0,tow:0,one:0,zero:0},
    selected:[]
    }))
}
