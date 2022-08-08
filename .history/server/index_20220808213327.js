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

const app = express()

const server = new ApolloServer({typeDefs,resolvers})

server.applyMiddleware({app})

app.listen({port:3000},()=>{
    console.log(`> Ready on http://localhost:3000`)
})