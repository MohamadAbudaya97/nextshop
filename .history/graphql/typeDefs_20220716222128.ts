import {gql } from "apollo-server-micro";

export const typeDefs = gql`
    type TripUpdateResponse {
    success: Boolean!
    message: String
    }

    type Book {
        title: String
        author: String
        test:Test
    }

    type Test {
        name: String
        print: String
    }

    type Prodects{
        name:string
        description:String
        brand:string
        rating:string
        SKU:string
        price:string
        inStock:string

    }


    type Query {
        books: [Book]
    }

    type Mutation {
        books(id:String): [Book]
    }

`;
