// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'

const server = new ApolloServer({})
export const config={
    api:{
        bodyParser:false
    }
}