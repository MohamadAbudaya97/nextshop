import { ApolloServer} from "apollo-server-micro";
import {resolvers} from '@Graphql/resolvers'
import {typeDefs} from '@Graphql/typeDefs'
import {makeExecutableSchema} from 'graphql-tools'
import { } from ''
import Cors from 'micro-cors'

const cors = Cors()

const apolloServer  = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}
export const config = {
  api: {
    bodyParser: false
  }
};
