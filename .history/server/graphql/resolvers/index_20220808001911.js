const {prodectResolvers} = require('./prodects')
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
