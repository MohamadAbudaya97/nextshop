import {userResolvers} from './users'
export const Resolvers = {
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
