import { ApolloServer } from "apollo-server-micro";
import "graphql-import-node";
import typeDefs from '@Graphql/graphql-schema'
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

const resolvers = {
  Query: {
    books: () => books,
  },
};




const apolloServer = new ApolloServer({
  typeDefs: [typeDefs],
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

async function start(req: any, res: any) {
  return apolloServer.createHandler({ path: "/api/graphql" })(req, res);
}

export default start;
