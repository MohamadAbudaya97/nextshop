

const prodectModels = require('@Models/prodect.models')
const {PubSub} = require('graphql-subscriptions')

const pubsub = new PubSub();


module.exports = {
    Query:{
        async products(_){

            try{
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