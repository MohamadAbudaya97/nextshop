
import {getData} from '@Services/prodect.service'

export const resolvers = {

  Query: {
    products: () => getData(),
  },
  Mutation:{
     getPridectById: (id) => null,
     getPridectByName: (name) => null,
  }

};