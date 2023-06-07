const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    username : {type:String,required:false,unique:true,minlength:3},
    password : {type:String,required:false,minlength:3},
}/* ,{
    timestamps : true
  } */
);

const Users = mongoose.model('Users',userSchema);

module.exports = Users;