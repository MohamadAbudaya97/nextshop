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
    
    type PriceType{
        cost:string
        price:string
        discount:string
    }

    type RatingType{
        zero:Number
        one:number 
        tow:number
        three:number
        fore:number
        five:number
        average:number
    }

    type SpecificationType{
        prodectInformation:string
        details:string
    }

    type CommentsType{
        userId:string
        data:Date
        rating:string
        title:string
        comment:string
        image:string
    }

    type Prodects{
        name:string
        description:String
        brand:string
        rating:string
        SKU:string
        price:PriceType
        inStock:string
        color:string
        size:string
        details:string[]
        specification:SpecificationType[]
        comments:CommentsType[]
        relatedProductsIds:string[]
    }


    type Query {
        books: [Book]
    }

    type Mutation {
        books(id:String): [Book]
    }

`;
