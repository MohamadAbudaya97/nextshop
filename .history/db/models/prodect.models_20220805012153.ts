import {Schema, model,models} from 'mongoose'
import IProdect from '@Interface/prodect'

const ProductsSchema = new Schema<IProdect>({
  name:{
    type:String,
    required:true,
    index:true
  },
  description:String,
  image:Array,
  brand:String,
  rating:Object,
  selected:Object,
  other:Object,
  price:Object,
  inStock:Number,
  details:Array,
  specification:Object,
  comments:Object,
  relatedProductsIds:Array
},{
  timestamps: true,
});

export default models. || model("Product",ProductsSchema)

//ProductsSchema.index({ name: 'text' })
//export default  mongoose.models.Product || mongoose.model('Product', ProductsSchema)
