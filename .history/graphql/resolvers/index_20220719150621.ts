import {userResolvers} from './users'
export const resolvers = {
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
