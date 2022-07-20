
import {getProdects,
        getPridectById,
        getPridectByName,
        setProdect
       } from '@Services/prodect.service'

export const resolvers = {

  Query: {
    products: () => getProdects(),
  },
  Mutation:{
     setProdect:(req:any)=>setProdect(req),
     getPridectById: (id:String) => getPridectById(id),
     getPridectByName: (name:String) => getPridectByName(name),
  }

};