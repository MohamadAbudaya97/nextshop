import mongoose,{Schema} from 'mongoose'
import IProdect from '@Interface/prodect'

mongoose.Promise = global.Promise

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

ProductsSchema.index({ name: 'text' })
export default  mongoose.models.Product || mongoose.model('Product', ProductsSchema)
