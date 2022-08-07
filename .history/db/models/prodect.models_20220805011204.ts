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
  brand:String,
  
},{
  timestamps: true,
});

ProductsSchema.index({ name: 'text' })
export default  mongoose.models.Product || mongoose.model('Product', ProductsSchema)
