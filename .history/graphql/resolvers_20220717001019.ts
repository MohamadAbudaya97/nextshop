
import {getData} from '@Services/prodect.service'

export const resolvers = {

  Query: {
    products: () => getData(),
  },
  Mutation:{
     getPridectById: () => null,
     getPridectByName: () => null,
  }

};