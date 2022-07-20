import {gql } from "apollo-server-micro";

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
        zero:Number
        one:number 
        tow:number
        three:number
        for:number
        five:number
        average:number
    }

    type SpecificationType{
        prodectInformation:String
        details:String
    }

    type CommentsType{
        userId:String
        data:Date
        rating:String
        title:String
        comment:String
        image:String
    }

    type Prodects{
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
