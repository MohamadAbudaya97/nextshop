import { makeExecutableSchema } from "@graphql-tools/schema";
import {resolvers} from '@Graphql/resolvers'
import {typeDefs} from '@Graphql/typeDefs'

import dbInit from "@/lib/dbInit";
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

  ],
  context: async (ctx) => {
    let wsServer = null;
    wsServer =  new WebSocketServer({
      port: 4000,
      path: "/api/graphql",
    });

    wsServer =useServer({ schema }, wsServer);


    let { token, costumerId, costumerExpire } = ctx.req["cookies"];

    return {
      ...ctx,
      costumerId,
      pubSub,
    };
  },
  schema,

});

export default server;
