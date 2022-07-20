
import {getData} from '@Services/prodect.service'

export const resolvers = {

  Query: {
    products: () => getData(),
  },
  Mutation:{
     getPridectById: (id:String) => null,
     getPridectByName: (name:String) => null,
  }

};