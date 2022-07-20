import mongoose,{Schema} from 'mongoose'
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
  brand: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: String,
    trim: true,
  },
  SKU: {
    type: String,
    trim: true,
  },
  other: {
    type: [String],
    trim: true,
  },
  price: {
    type: String,
    trim: true,
  },
  inStock: {
    type: String,
    trim: true,
  },
  colors: {
    type: String,
    trim: true,
  },
  sizes: {
    type: String,
    trim: true,
  },
  details: {
    type: [String],
    trim: true,
  },
  specification: {
    type: String,
    trim: true,
  },
  comments: {
    type: String,
    trim: true,
  },
  relatedProductsIds: {
    type: String,
    trim: true,
  },
})

ProductsSchema.index({ name: 'text' })


export default  mongoose.models.Product || mongoose.model('Product', ProductsSchema)
