
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
    cost:number,
    price:number,
    discount:number
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
    name:String,
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

interface SelectedType{
    title:String
    description:String
}

export default interface Prodect{
        _id:string
        name:String
        description:String
        image:String[]
        brand:String
        rating:RatingType
        selected:SelectedType[]
        SKU:String
        other:OtherType[]
        price:PriceType
        inStock:number
        colors:String[]
        sizes:String[]
        details:String[]
        specification:SpecificationType[]
        comments:CommentsType[]
        relatedProductsIds:String[]
}

export  interface setProdectType{
        name:String
        description:String
        brand:String
        SKU:String
        other:[OtherType]
        price:PriceType
        inStock:String
        colors:[String]
        sizes:[String]
        details:[String]
        specification:[SpecificationType]
        relatedProductsIds:[String]

}