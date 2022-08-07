import mongoose,{Schema} from 'mongoose'
import IProdect from '@Interface/prodect'

mongoose.Promise = global.Promise

const ProductsSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  brand: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: String,
    trim: true,
  },
  selected: {
    type: [Object],
    trim: true,
  },
  other: {
    type: [Object],
    trim: true,
  },
  price: {
    type: Object,
    trim: true,
  },
  inStock: {
    type: String,
    trim: true,
  },
  details: {
    type: [String],
    trim: true,
  },
  specification: {
    type: [Object],
    trim: true,
  },
  comments: {
    type: [Object],
    trim: true,
  },
  relatedProductsIds: {
    type: [String],
    trim: true,
  },
},{
  timestamps: true,
});

ProductsSchema.index({ name: 'text' })
export default  mongoose.models.Product || mongoose.model('Product', ProductsSchema)
