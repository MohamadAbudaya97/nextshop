const express = require('express')
const next = require('next')
const mongoose = require('mongoose');

const { createServer } =require("http");

const { ApolloServer, gql } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } =require("apollo-server-core");
const { PubSub } = require("graphql-subscriptions");
const { makeExecutableSchema }= require("@graphql-tools/schema");
const { WebSocketServer } =require("ws");
const { useServer }= require("graphql-ws/lib/use/ws");
const {resolvers}= require('./graphql/resolvers')
const typeDefs = require('./graphql/typeDefs')

const hostname = 'localhost'
const PORT = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const nextapp = next({ dev , hostname , PORT })
const handle = nextapp.getRequestHandler()


nextapp.prepare().then(async () => {

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology:true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

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

app.get('*/*', (req, res) => {
    return handle(req, res)
})

// Now that our HTTP server is fully set up, actually listen.
httpServer.listen(PORT, () => {
  console.log(
    `🚀 site ready at http://localhost:${PORT}`
   );
  console.log(
    `🚀 Query endpoint ready at http://localhost:${PORT}${server.graphqlPath}`
  );
  console.log(
    `🚀 Subscription endpoint ready at ws://localhost:${PORT}${server.graphqlPath}`
  );
});

})
