const express = require('express')
const next = require('next')

const { ApolloServer, gql } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } =require("apollo-server-core");
const { PubSub } = require("graphql-subscriptions");
const { makeExecutableSchema }= require("@graphql-tools/schema");
const { WebSocketServer } =require("ws");
const { useServer }= require("graphql-ws/lib/use/ws");
const {resolvers}= require('@Graphql/resolvers')
const {typeDefs} = require('@Graphql/typeDefs')


const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(async () => {

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const server = express()

  const wsServer = new WebSocketServer({
  server: httpServer,
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

  ServerApollo.applyMiddleware({app:app})

  server.all('*', (req, res) => {
    
    return handle(req, res)
  })

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
      console.log(
        `🚀 Query endpoint ready at http://localhost:${PORT}${server.graphqlPath}`
      );
      console.log(
        `🚀 Subscription endpoint ready at ws://localhost:${PORT}${server.graphqlPath}`
      );
  })
})
