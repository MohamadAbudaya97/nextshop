
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
     setProdect:(parent:any,args:any)=>setProdect(args),
     getPridectById: (id:String) => getPridectById(id),
     getPridectByName: (name:String) => getPridectByName(name),
  }

};