
export interface SingleSwiper{

}

export interface PriceType{
    cost:String,
    price:String,
    discount:String
}

export interface RatingType{
        zero:number,
        one:number ,
        tow:number,
        three:number,
        for:number,
        five:number,
        average:number
}

export interface SpecificationType{
    prodectInformation:String,
    details:String
}

export interface CommentsType{
    userId:String
    data:String
    rating:String
    title:String
    comment:String
    image:String
}

export interface OtherType{
    title:String
    description:String
}


export default interface Prodect{
        _id:string
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