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
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  createAt: {
    type: Date,
    defalut: Date.now(),
  },
})

ProductsSchema.index({ name: 'text' })


export default  mongoose.models.Product || mongoose.model('Product', ProductsSchema)
