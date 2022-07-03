import  ApolloServer  from "apollo-server-micro/ApolloServer";
import {resolvers} from '@Graphql/resolvers'
import {typeDefs} from '@Graphql/typeDefs'
const apolloServer  = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
