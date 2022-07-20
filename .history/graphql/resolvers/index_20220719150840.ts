import {prodectResolvers} from './prodects'
export const resolvers = {
  Post: {
  },
  Query: {
  },
  Mutation: {
    ...prodectResolvers.Mutation
  },
  Subscription: {
  }
};
