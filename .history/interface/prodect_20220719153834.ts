
interface SingleSwiperLink{
  name:string,
  url:string
}
export interface SingleSwiper{
    image:string,
    header:string,
    discription:string,
    link:SingleSwiperLink
}

export interface Ads{
    image:string,
    name:string,
    url:string
}

export interface Catagory{
    name:string,
    image:string,
    url:string
}

interface PriceType{
    cost:String,
    price:String,
    discount:String
}

interface RatingType{
        zero:number,
        one:number ,
        tow:number,
        three:number,
        for:number,
        five:number,
        average:number
}

interface SpecificationType{
    prodectInformation:String,
    details:String
}

interface CommentsType{
    userId:String
    data:String
    rating:String
    title:String
    comment:String
    image:String
}

interface OtherType{
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

export  interface setProdect{
        name:String
        description:String
        brand:String
        SKU:String
        other:[OtherType]!
        price:PriceType
        inStock:String
        colors:[String]
        sizes:[String]
        details:[String]
        specification:[SpecificationType]
        relatedProductsIds:[String]

}