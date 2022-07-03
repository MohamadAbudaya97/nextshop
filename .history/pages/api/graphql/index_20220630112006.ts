// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer , gql, makeExecutableSchema} from 'apollo-server-micro'
import {buildSchema,Resolver,Query,Arg,ObjectType } from 'type-graphql'
const resolvers = {
  Query: {
    user(parent, args, context, info) {
      return {
        "name":"mohamad"
      };
    }
  }
}

const server = new ApolloServer({
resolvers
})

export const config={
    api:{
        bodyParser:false
    }
}

const startServer = server.start();

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    await startServer
    await server.createHandler({path:'/api/graphql'})(req,res)
}
