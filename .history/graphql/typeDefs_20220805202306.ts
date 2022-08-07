import {gql } from "apollo-server-micro";
export const typeDefs = gql`

    type TripUpdateResponse {
    success: Boolean!
    message: String
    }

    
    type PriceType{
        cost:Float
        price:Float
        discount:Float
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
        name:String
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

    type SelectedItemsType{
        image:String
        name:String
    }

    type SelectedType{
        title:String
        items:[SelectedItemsType]
    }

    type Prodects{
        _id:ID
        name:String
        description:String
        image:[String]!
        brand:String
        rating:RatingType
        selected:[SelectedType]!
        other:[OtherType]!
        price:PriceType
        inStock:Float
        details:[String]!
        specification:[SpecificationType]!
        comments:[CommentsType]!
        relatedProductsIds:[String]!
    }


    type Test{
        name:String
    }
    input RatingType{
        zero:Float
        one:Float 
        tow:Float
        three:Float
        for:Float
        five:Float
        average:Float
    }
    input ProdectInput{       
        name:String
        description:String
        image:[String]!
        brand:String
        rating:RatingType
        selected:[SelectedType]!
        other:[OtherType]!
        price:PriceType
        inStock:Float
        details:[String]!
        specification:[SpecificationType]!
        comments:[CommentsType]!
        relatedProductsIds:[String]!
    }
    input PriceTypeInput{
        cost:Float
        price:Float
        discount:Float
    }


    input SpecificationTypeInput{
        name:String
        details:String
    }
    
    input OtherTypeInput{
        title:String
        description:String
    }

    type Query {
        products: [Prodects]!
    }

    type Mutation {
        getProdectById(id:String): Prodects
        getProdectByName(name:String): Prodects
        setProdect(req:ProdectInput):Prodects
        updateProdect(id:String,req:ProdectInput):Prodects
    }

`;
//        registerInput: { username, email, password, confirmPassword }
