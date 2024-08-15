const mongoose = require('mongoose');
const { SchemaTypes } = require('mongoose');

const userSchema = mongoose.Schema({
    name:{type: SchemaTypes.String, minLength:1, maxLength:30, required:true},
    userId:{type: SchemaTypes.Mixed, minLength:3, maxLength:30, required:true},
    emailId:{type: SchemaTypes.Mixed, minLength:9, maxLength:40, required:true},
    password:{type: SchemaTypes.Mixed, minLength:9, maxLength:40, required:true},
    phoneNumber:{type:SchemaTypes.Number, minLength:10, maxLength:10 , required:true},
    friendList:{type:SchemaTypes.Array, minLength:0, maxLength:100, required:true}
})

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;