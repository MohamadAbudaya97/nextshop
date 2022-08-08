const {gql } = require("apollo-server-micro");
const typeDefs = gql`

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
        image:[String]
        brand:String
        rating:RatingType
        selected:[SelectedType]
        other:[OtherType]
        price:PriceType
        inStock:Float
        details:[String]
        specification:[SpecificationType]
        comments:[CommentsType]
        relatedProductsIds:[String]
    }


#  heare input setProdect

    input inputRatingType{
        zero:Float
        one:Float 
        tow:Float
        three:Float
        for:Float
        five:Float
        average:Float
    }

    input inputSelectedType{
        title:String
        items:[inputSelectedItemsType]
    }

    input inputSelectedItemsType{
        image:String
        name:String
    }

    input inputOtherType{
        title:String
        description:String
    }

    input inputPriceType{
        cost:Float
        price:Float
        discount:Float
    }

    input inputSpecificationType{
        name:String
        details:String
    }

    input inputCommentsType{
        userId:ID
        data:String
        rating:String
        title:String
        comment:String
        image:String
    }


    input ProdectInput{       
        name:String
        description:String
        image:[String]!
        brand:String
        rating:inputRatingType
        selected:[inputSelectedType]!
        other:[inputOtherType]!
        price:inputPriceType
        inStock:Float
        details:[String]!
        specification:[inputSpecificationType]!
        comments:[inputCommentsType]!
        relatedProductsIds:[String]!
    }

    type Query {
        products: [Prodects]!
    }

    type Mutation {
        setProdect(req:ProdectInput):TripUpdateResponse
        deleteProdect(id:String):TripUpdateResponse
        getProdectById(id:String): Prodects
        updateProdect(id:String,req:ProdectInput):TripUpdateResponse
        getProdectByName(name:String): Prodects
    }
  
    type Subscription{
        productsUpdate:[Prodects]
    }
`;
//        registerInput: { username, email, password, confirmPassword }

module.exports = typeDefs