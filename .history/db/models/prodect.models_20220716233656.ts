import mongoose,{Schema} from 'mongoose'
mongoose.Promise = global.Promise

const ProductsSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: Number,
    required: true,
    trim: true,
  },
  brand: {
    type: Number,
    required: true,
    trim: true,
  },
  rating: {
    type: String,
    trim: true,
  },
  SKU: {
    type: Date,
    defalut: Date.now(),
  },
  other: {
    type: String,
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
  rating: {
    type: String,
    trim: true,
  },
})

ProductsSchema.index({ name: 'text' })


export default  mongoose.models.Product || mongoose.model('Product', ProductsSchema)
