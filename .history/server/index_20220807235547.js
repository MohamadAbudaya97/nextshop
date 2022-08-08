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

app.prepare().then(() => {
  const server = express()

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})