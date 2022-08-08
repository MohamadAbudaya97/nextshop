import { createServer } from "http";
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { PubSub } from "graphql-subscriptions";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import next from 'next'
import {resolvers} from '@Graphql/resolvers'
import {typeDefs} from '@Graphql/typeDefs'



const hostname = 'localhost'
const port = parseInt(process.env.port, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const nextapp = next({ dev , hostname , port })
const handle = nextapp.getRequestHandler()



nextapp.prepare().then(async () => {

const port = 4000;
const pubsub = new PubSub();

// Create schema, which will be used separately by ApolloServer and
// the WebSocket server.
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Create an Express app and HTTP server; we will attach the WebSocket
// server and the ApolloServer to this HTTP server.
const app = express();
const httpServer = createServer(app);

// Set up WebSocket server.
const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});
const serverCleanup = useServer({ schema }, wsServer);

// Set up ApolloServer.
const server = new ApolloServer({
  schema,
  plugins: [
    // Proper shutdown for the HTTP server.
    ApolloServerPluginDrainHttpServer({ httpServer }),

    // Proper shutdown for the WebSocket server.
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

await server.start();




server.applyMiddleware({ app });


// Now that our HTTP server is fully set up, actually listen.
httpServer.listen(port, () => {
  console.log(
    `🚀 Query endpoint ready at http://localhost:${port}${server.graphqlPath}`
  );
  console.log(
    `🚀 Subscription endpoint ready at ws://localhost:${port}${server.graphqlPath}`
  );
});



})