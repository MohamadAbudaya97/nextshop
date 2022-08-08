const prodectResolvers = require('./prodects')
module.exports = {
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
