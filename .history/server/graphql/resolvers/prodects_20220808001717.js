const Iprodect = require('@Interface/prodect')
const dbConnect = require('@DBConnect')
const prodectModels = require('@Models/prodect.models')
const {PubSub} = require('graphql-subscriptions')

const pubsub = new PubSub();


export const prodectResolvers = {
    Query:{
        async products(_){

            try{
                await dbConnect()
                const data = await prodectModels.find({})
                pubsub.publish('Prodect_Created',data)
                return data
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
            async deleteProdect(_,{id}){
                await dbConnect()
                try {
                   console.log(await prodectModels.deleteOne({ _id: id }));
                    return {
                        success: true,
                        message: "Prodect Deleted !"
                    }
                } catch (error) {
                    return {
                        success: false,
                        message: error.message
                    } 
                }
            },
            async getProdectById(_,{id}){
                await dbConnect()
                try {
                    const response = await prodectModels.find({_id:id})
                    return response[0]
                } catch (error) {
                    return null
                }
            },
            async getProdectByName(_,{name}){
                return await []
            },
            async updateProdect(_,{id,req}){
               await dbConnect()
                try {
                   console.log(await prodectModels.updateOne({ _id: id },req));
                    return {
                        success: true,
                        message: "Prodect Updated !"
                    }
                } catch (error) {
                    return {
                        success: false,
                        message: error.message
                    } 
                }
            }
    },
    Subscription:{
        productsUpdate:{
            subscribe:()=>pubsub.asyncIterator(['Prodect_Created'])
        }
    }
    
}