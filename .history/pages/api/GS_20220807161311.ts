import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from "@/server/graphql/typeDef/schema.graphql";
import resolvers from "@/server/graphql/resolvers";
import dbInit from "@/lib/dbInit";
import JWT from "jsonwebtoken";
import Cors from "micro-cors";

// const pubsub = new PubSub();
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

import {
  createServer,
  createPubSub,
  GraphQLYogaError,
} from "@graphql-yoga/node";
import { useResponseCache } from "@envelop/response-cache";
import { WebSocketServer } from "ws"; // yarn add ws
// import ws from 'ws'; yarn add ws@7
// const WebSocketServer = ws.Server;
import { useServer } from "graphql-ws/lib/use/ws";

const pubSub = createPubSub();

const server = createServer({
  cors: {
    credentials: "same-origin",
    origin: ["http://localhost:3000"], // your frontend url.
  },

  plugins: [
    useResponseCache({
      includeExtensionMetadata: true,
    }),
  ],
  context: async (ctx) => {
    let wsServer = null;
    wsServer = ctx.res.socket.server.ws ||= new WebSocketServer({
      port: 4000,
      path: "/api/graphql",
    });
    wsServer &&= useServer({ schema }, wsServer);

    const db = await dbInit();
    let { token, costumerId, costumerExpire } = ctx.req.cookies;
    // 1. Find optional visitor id
    let id = null;
    if (token) {
      try {
        let obj = JWT.verify(token, "MY_SECRET");
        id = obj.id;
      } catch (err) {
        console.error("error on apollo server", err); // expired token, invalid token
        // TODO try apollo-link-error on the client
        throw new AuthenticationError(
          "Authentication token is invalid, please log in"
        );
      }
    }

    return {
      ...ctx,
      userId: id,
      costumerId,
      pubSub,
    };
  },
  schema,

});

export default server;
