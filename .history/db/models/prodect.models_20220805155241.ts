import {Schema, model,models,Types } from 'mongoose'
import IProdect,{RatingType,SelectedType,OtherType, PriceType,CommentsType,SpecificationType} from '@Interface/prodect'
const ProductsSchema = new Schema<IProdect>({
  name:{
    type:String,
    required:true,
    index:true
  },
  description:String,
  image:{
    
  },
  brand:String,
  rating:{
        zero:Number,
        one:Number ,
        tow:Number,
        three:Number,
        for:Number,
        five:Number,
        average:Number
   },
  selected:[
    {    
    title:String,
    items:[{
      image:String,
      items:{
        type:String,
        required:true
      }
    }]
    }
  ],
  other:[{title:String,description:String}],
  price:{
    price:Number,
    cost:Number,
    discount:Number
  },
  inStock:Number,
  details:[String],
  specification:[{name:String,details:String}],
  comments:[
    {
    userId:String,
    data:String,
    rating:String,
    title:String,
    comment:String,
    image:String
    }
  ],
  relatedProductsIds:[String]
},{
  timestamps: true,
});

export default models.Product || model<IProdect>("Product",ProductsSchema)

//ProductsSchema.index({ name: 'text' })
//export default  mongoose.models.Product || mongoose.model('Product', ProductsSchema)
