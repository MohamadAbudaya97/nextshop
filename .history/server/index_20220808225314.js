//Node app server
const express = require('express')
//To parse incoming requests
const bodyParser =require('body-parser');
//Apollo GraphQL server including Graphiql client
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
//GraphQL tools is an opinionated structure for building GraphQL schemas and resolvers in JavaScript
const { makeExecutableSchema } =require('graphql-tools');

const {resolvers}= require('./graphql/resolvers')
const typeDefs = require('./graphql/typeDefs')


//Set Port. If environment variable exist use it instead
const GRAPHQL_PORT = process.env.GRAPHQL_PORT || 3000;

// Initialize the HTTP server using express
const server = express();

//Generate the executable schema. Note that makeExecutableSchema expects typeDefs and resolvers as input
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

//Define the GraphQL endpoint using the Apollo GraphQL Server. Note that graphqlExress expects the schema constant
server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

//Implement the Graphiql client available that comes with the Apollo GraphQL Server
server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

// Start the server
server.listen(GRAPHQL_PORT, () => {
  console.log('Go to http://localhost:' + GRAPHQL_PORT + '/graphiql to run queries!');
});