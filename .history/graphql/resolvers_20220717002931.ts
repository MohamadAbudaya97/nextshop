
import {getProdects,
        getPridectById,
        getPridectByName,
        setProdect
       } from '@Services/prodect.service'
import {} from './typeDefs'
export const resolvers = {

  Query: {
    products: () => getProdects(),
  },
  Mutation:{
     setProdect:(_:any,req:any)=>setProdect(req),
     getPridectById: (id:String) => getPridectById(id),
     getPridectByName: (name:String) => getPridectByName(name),
  }

};