const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
    test:{
        name:"mohamad"
    }
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
  Mutation:{
     books: () => books,
  }

};