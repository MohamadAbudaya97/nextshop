import Iprodect from '@Interface/prodect'
import dbConnect from '@DBConnect'
import prodectModels from '@Models/prodect.models'


const data:Iprodect[]=[
    {
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
    image:[],
    rating:{average:0,five:0,for:0,three:0,tow:0,one:0,zero:0},
    selected:[]
    }
]

export const prodectResolvers = {
    Query:{
        async products(_){
            try{
                await dbConnect()
             return await prodectModels.find({})
            }catch(err){
                return {
                    success: false,
                    message: err.message
                }
            }

        }
    },
    Mutation:{
            async setProdect(_,{req}){
                console.log(req)
                try {
                    await dbConnect()
                    const newProdect = new prodectModels(req)
                    await newProdect.save()
                    return {
                        success: true,
                        message: "add Prodect !"
                    }
                } catch (error) {
                    return {
                        success: false,
                        message: error.message
                    }
                }
            },
            async getProdectById(_,{id}){
            return await data
            },
            async getProdectByName(_,{name}){
                return await data
            },
            async updateProdect(_,{id,req}){
                return await data
            }
    }
}