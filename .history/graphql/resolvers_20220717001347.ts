
import {getAllData} from '@Services/prodect.service'

export const resolvers = {

  Query: {
    products: () => getAllData(),
  },
  Mutation:{
     getPridectById: (id:String) => null,
     getPridectByName: (name:String) => null,
  }

};