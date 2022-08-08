const express = require('express')
const next = require('next')

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
const port = parseInt(process.env.PORT, 10) || 3000

const dev = process.env.NODE_ENV !== 'production'

const nextapp = next({ dev , hostname , port })

const handle = app.getRequestHandler()

nextapp.prepare().then(async () => {

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const app = express()

  const httpServer = createServer(app);


  const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/api/data",
  });

  const serverCleanup = useServer({ schema }, wsServer);

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
  
  await server.start()

  server.applyMiddleware({app})

  server.all('*', (req, res) => {
    return handle(req, res)
  })

httpServer.listen


  (port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
