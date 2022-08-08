import mongoose from "mongoose";
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise

const users = new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  photoUrl: {
    type: String,
    required: true
  },
  authToken: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default : "user",
    enum: ["user","admin","subAdmin"]
  },
  provider: {
    type: String,
    required: true
  },

});
module.exports =mongoose.models.users || mongoose.model('users', users)
  
