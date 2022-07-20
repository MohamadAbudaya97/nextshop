import {userResolvers} from './users'
module.exports = {
  Post: {
  },
  Query: {
  },
  Mutation: {
    ...userResolvers.Mutation
  },
  Subscription: {
  }
};
