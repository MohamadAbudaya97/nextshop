import {gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Book {
    title: String!
    author: String
  }
  type Query {
    books: [Book]
  }
 type Mutation {
 books: [Book]
}
`;
