
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

export type Test={
    data:String
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

export interface PriceType{
    cost:number,
    price:number,
    discount:number
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

export  interface SpecificationType{
    name:String,
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


export interface SelectedItemsType{
    image?:String
    name:String
}

export interface SelectedType{
    title:String
    items:SelectedItemsType[]
}

export default interface Prodect{
        _id?:string
        name:String
        description:String
        image:String[]
        brand:String
        rating:RatingType
        selected:SelectedType[]
        other:OtherType[]
        price:PriceType
        inStock:number
        details:String[]
        specification:SpecificationType[]
        comments:CommentsType[]
        relatedProductsIds:String[]
}
/*
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
*/