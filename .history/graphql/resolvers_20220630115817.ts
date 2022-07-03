const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

export const resolvers = {
  Query: {
    books: () => books,
  },
Mutation: {
  login: async (_, { email }, { dataSources }) => {
    const user = await dataSources.userAPI.findOrCreateUser({ email });
    if (user) {
      user.token = Buffer.from(email).toString('base64');
      return user;
    }
  },
},
};