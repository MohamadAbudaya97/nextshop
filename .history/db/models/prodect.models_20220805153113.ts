import {Schema, model,models,Types } from 'mongoose'
import IProdect,{RatingType,SelectedType,OtherType, PriceType,CommentsType,SpecificationType} from '@Interface/prodect'
const ProductsSchema = new Schema<IProdect>({
  name:{
    type:String,
    required:true,
    index:true
  },
  description:String,
  image:Array,
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
    
  },
  inStock:Number,
  details:Array,
  specification:Types.DocumentArray<SpecificationType>,
  comments:Types.DocumentArray<CommentsType>,
  relatedProductsIds:Array
},{
  timestamps: true,
});

export default models["Product"] || model<IProdect>("Product",ProductsSchema)

//ProductsSchema.index({ name: 'text' })
//export default  mongoose.models.Product || mongoose.model('Product', ProductsSchema)
