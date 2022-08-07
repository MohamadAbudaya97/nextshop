import { makeExecutableSchema } from 'graphql-tools';
import { ApolloServer} from "apollo-server-micro";
import {resolvers} from '@Graphql/resolvers'
import {typeDefs} from '@Graphql/typeDefs'


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const apolloServer = new ApolloServer({
  schema,
  context: async ({ req, connection }) => {
    if (connection) {
      // check connection for metadata
      return connection.context;
    }
    // get the user from the request
    return {
      user: req.user,
      useragent: req.useragent,
    };
  },

  subscriptions: {
    path: '/api/graphqlSubscriptions',
    keepAlive: 9000,
    onConnect: console.log('connected'),
    onDisconnect: () => console.log('disconnected'),
  },
  playground: {
    subscriptionEndpoint: '/api/graphqlSubscriptions',

    settings: {
      'request.credentials': 'same-origin',
    },
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const graphqlWithSubscriptionHandler = (req, res, next) => {
  if (!res.socket.server.apolloServer) {
    console.log(`* apolloServer first use *`);

    apolloServer.installSubscriptionHandlers(res.socket.server);
    const handler = apolloServer.createHandler({ path: '/api/graphql' });
    res.socket.server.apolloServer = handler;
  }

  return res.socket.server.apolloServer(req, res, next);
};

export default graphqlWithSubscriptionHandler;
