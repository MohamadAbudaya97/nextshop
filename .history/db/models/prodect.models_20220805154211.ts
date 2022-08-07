import {Schema, model,models,Types } from 'mongoose'
import IProdect,{RatingType,SelectedType,OtherType, PriceType,CommentsType,SpecificationType} from '@Interface/prodect'
const ProductsSchema = new Schema({
  name:{
    type:String,
    required:true,
    index:true
  },
  description:String,
  image:{
    type:Array
  },
  brand:String,
  rating:{
   type:Object
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

export default models["Product"] || model("Product",ProductsSchema)

//ProductsSchema.index({ name: 'text' })
//export default  mongoose.models.Product || mongoose.model('Product', ProductsSchema)
