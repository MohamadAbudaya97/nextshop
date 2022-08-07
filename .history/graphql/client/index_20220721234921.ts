import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});
export default client