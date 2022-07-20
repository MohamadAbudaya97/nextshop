
import {getProdects,
        getPridectById,
        getPridectByName
       } from '@Services/prodect.service'

export const resolvers = {

  Query: {
    products: () => getProdects(),
  },
  Mutation:{
     getPridectById: (id:String) => getPridectById(id),
     getPridectByName: (name:String) => getPridectByName(name),
  }

};