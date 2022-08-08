const prodectResolvers = require('./prodects')
module.exports = {

  Mutation: {
    ...prodectResolvers.Mutation
  },
  Subscription:{
   ...prodectResolvers.Subscription
  }
};
