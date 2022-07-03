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
      Foo: {
            someFooProperty: (foo, args, context, info) => {}
        },
    Bar: {
        someBarProperty: (bar, args, context, info) => {},
        someOtherBarProperty: (bar, args, context, info) => {}
    },
  Query: {
    books: () => books,
  },
Mutation: {
  login: async (_, { email }) => {
      return books;
    }
  },
};