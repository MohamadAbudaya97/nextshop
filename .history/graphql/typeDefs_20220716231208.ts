import {gql } from "apollo-server-micro";

export const typeDefs = gql`

            type Content_Page implements Node & Content {
            id: ID!

            # Add / change your custom fields here:
            title: String!
            slug: String! @unique
            # ...

            # Fields of Content interface:
            contentNode: ContentNode!
            locale: Locale!
            status: ContentStatus!
            publishedAt: DateTime
            publishedBy: User
            createdAt: DateTime!
            createdBy: User
            lastUpdatedAt: DateTime
            lastUpdatedBy: User
            }




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
        zero:Int
        one:Int 
        tow:Int
        three:Int
        for:Int
        five:Int
        average:Int
    }

    type SpecificationType{
        prodectInformation:String
        details:String
    }

    type CommentsType{
        userId:ID
        data:DateTime
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
