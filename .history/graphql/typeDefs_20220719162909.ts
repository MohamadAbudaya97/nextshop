import { setProdect } from './../services/prodect.service';
import {gql } from "apollo-server-micro";
import ProdectType from '@Interface/prodect'
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
        data:String
        rating:String
        title:String
        comment:String
        image:String
    }
    
    type OtherType{
        title:String
        description:String
    }

    type Prodects{
        _id:ID
        name:String
        description:String
        brand:String
        rating:RatingType
        SKU:String
        other:[OtherType]
        price:PriceType
        inStock:String
        colors:[String]
        sizes:[String]
        details:[String]
        specification:[SpecificationType]
        comments:[CommentsType]
        relatedProductsIds:[String]
    }
    
    input ProdectInput{
        name:String!
        description:String!
        brand:String!
        SKU:String!
        other:[OtherTypeInput]!
        price:PriceTypeInput!
        inStock:String!
        colors:[String]!
        sizes:[String]!
        details:[String]!
        specification:[SpecificationTypeInput]!
        relatedProductsIds:[String]!
    }
    input PriceTypeInput{
        cost:String
        price:String
        discount:String
    }


    input SpecificationTypeInput{
        prodectInformation:String
        details:String
    }
    
    input OtherTypeInput{
        title:String
        description:String
    }

    type Query {
        products: [Prodects]
    }
    input asdsad{
        name:String
    }
    type Mutation {
        getProdectById(id:String): Prodects
        getProdectByName(name:String): Prodects
        setProdect(req:ProdectInput):String
    }

`;
//        registerInput: { username, email, password, confirmPassword }
