import { ApolloServer,gql } from "apollo-server-micro";
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

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;



const apolloServer  = new ApolloServer({
  typeDefs,
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
