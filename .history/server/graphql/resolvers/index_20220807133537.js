import {prodectResolvers} from './prodects'
export const resolvers = {

  Query: {
    ...prodectResolvers.Query
  },
  Mutation: {
    ...prodectResolvers.Mutation
  },
  Subscription:{
   ...prodectResolvers.Subscription
  }
};
