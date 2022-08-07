
const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
});

export default client;

 import { useMemo } from "react";
 import { ApolloClient, HttpLink, InMemoryCache } from 
 "@apollo/client";

 export let apolloClient;

 function createApolloClient() {
   return new ApolloClient({
     ssrMode: typeof window === "undefined", // set to true for SSR
     link: new HttpLink({
       uri: "YOUR-SLASH-ENDPOINT",
     }),
     cache: new InMemoryCache(),
   });
 }
