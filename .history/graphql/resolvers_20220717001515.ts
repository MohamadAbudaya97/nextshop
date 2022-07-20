
import {getProdects} from '@Services/prodect.service'

export const resolvers = {

  Query: {
    products: () => getProdects(),
  },
  Mutation:{
     getPridectById: (id:String) => null,
     getPridectByName: (name:String) => null,
  }

};