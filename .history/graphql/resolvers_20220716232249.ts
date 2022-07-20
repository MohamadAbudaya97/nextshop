
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
    products: () => [],
  },
  Mutation:{
     getPridectById: () => null,
     getPridectByName: () => null,
  }

};