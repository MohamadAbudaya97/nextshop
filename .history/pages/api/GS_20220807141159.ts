import { ApolloServer} from "apollo-server-micro";
import {resolvers} from '@Graphql/resolvers'
import {typeDefs} from '@Graphql/typeDefs'

import Cors from "micro-cors";
const API_URL = "/api/GS"
const cors = Cors();

const apolloServer = new ApolloServer({
  resolvers,
  typeDefs,
  introspection: true,
});

// @ts-ignore
await apolloServer.start();

export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  return apolloServer.createHandler({ path: API_URL })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
