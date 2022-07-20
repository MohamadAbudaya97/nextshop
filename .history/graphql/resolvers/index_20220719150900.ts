import {prodectResolvers} from './prodects'
export const resolvers = {

  Query: {
  },
  Mutation: {
    ...prodectResolvers.Mutation
  }
};
