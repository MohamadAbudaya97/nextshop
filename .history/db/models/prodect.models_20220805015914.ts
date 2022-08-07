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
  rating:Types.DocumentArray<RatingType>,
  selected:Types.DocumentArray<SelectedType>,
  other:Types.DocumentArray<OtherType>,
  price:Types.DocumentArray<PriceType>,
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
