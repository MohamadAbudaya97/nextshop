const mongoose =require('mongoose')
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


const ProductsSchema = new Schema({
  name:{
    type:String,
    required:true,
    index:true
  },
  description:String,
  image:Object,
  brand:String,
  rating:{
    type:{
         zero:Number,
        one:Number ,
        tow:Number,
        three:Number,
        for:Number,
        five:Number,
        average:Number
    } 
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
    price:Number,
    cost:Number,
    discount:Number
  },
  inStock:Number,
  details:[String],
  specification:[{name:String,details:String}],
  comments:[
    {
    userId:String,
    data:String,
    rating:String,
    title:String,
    comment:String,
    image:String
    }
  ],
  relatedProductsIds:[String]
},{
  timestamps: true,
});



const dataVideo = mongoose.model('Product', ProductsSchema);

module.exports = dataVideo;
