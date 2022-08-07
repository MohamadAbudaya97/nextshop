import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';

import {resolvers} from '@Graphql/resolvers'
import {typeDefs} from '@Graphql/typeDefs'

async function startApolloServer() {
    const app = express();
    const httpServer = http.createServer(app);
    const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
});
}
await apolloServer.start();
apolloServer.applyMiddleware({ app });
await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
console.log(`that worked server started ${apolloServer.graphqlPath} `)

// export const config = { 
//     api: {
//         bodyParser: false
//     }
// };

// export default apolloServer.createHandler({
//     path: 'api/graphql'
// });
