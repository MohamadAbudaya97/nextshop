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
const app = next({ dev , hostname , port })

const handle = app.getRequestHandler()

app.prepare().then(async () => {

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const server = express()
  const httpServer = createServer(app);

  console.log(httpServer)

  const wsServer = new WebSocketServer({
  server: app,
  path: "/api/data",
  });

  const serverCleanup = useServer({ schema }, wsServer);

  const ServerApollo = new ApolloServer({
    schema,
    plugins: [
      // Proper shutdown for the HTTP server.
      ApolloServerPluginDrainHttpServer({ httpServer:app }),

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
  
  await ServerApollo.start()

  ServerApollo.applyMiddleware({app:server})
  
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
