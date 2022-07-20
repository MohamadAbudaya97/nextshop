import {gql } from "apollo-server-micro";
const { GraphQLDateTime } = require('graphql-iso-date')

export const typeDefs = gql`

    type TripUpdateResponse {
    success: Boolean!
    message: String
    }

    
    type PriceType{
        cost:String
        price:String
        discount:String
    }

    type RatingType{
        zero:Float
        one:Float 
        tow:Float
        three:Float
        for:Float
        five:Float
        average:Float
    }

    type SpecificationType{
        prodectInformation:String
        details:String
    }

    type CommentsType{
        userId:ID
        data:GraphQLDateTime
        rating:String
        title:String
        comment:String
        image:String
    }

    type Prodects{
        _id:ID
        name:String
        description:String
        brand:String
        rating:RatingType
        SKU:String
        other:object
        price:PriceType
        inStock:String
        color:String
        size:String
        details:[String]
        specification:[SpecificationType]
        comments:[CommentsType]
        relatedProductsIds:[String]
    }


    type Query {
        products: [Prodects]
    }

    type Mutation {
        getPridectById(id:String): Prodects
        getPridectByName(name:String): Prodects
    }

`;
