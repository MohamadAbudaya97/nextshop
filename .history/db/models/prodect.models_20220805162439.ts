import mongoose,{Schema, model,models} from 'mongoose'
import IProdect,{RatingType,SelectedType,OtherType, PriceType,CommentsType,SpecificationType} from '@Interface/prodect'
mongoose.Promise = global.Promise;

const ProductsSchema = new Schema({
  name:{
    type:String,
    required:true,
    index:true
  },
});

export default mongoose.models.Product || model("Product",ProductsSchema)

//ProductsSchema.index({ name: 'text' })
//export default  mongoose.models.Product || mongoose.model('Product', ProductsSchema)
