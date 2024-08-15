const mongoose = require('mongoose');
const { SchemaTypes } = require('mongoose');

const billSchema = mongoose.Schema({
    amount:{type: SchemaTypes.Number, minLength:1, maxLength:30, required:true},
    activity:{type: SchemaTypes.Mixed, minLength:3, maxLength:30, required:true},
    createdAt:{type:SchemaTypes.Date, minLength:0 , maxLength:20 , required:true},
    share:{type:SchemaTypes.Number, minLength:0 , maxLength:20 , required:true}
})

const billModel = mongoose.model('bills', billSchema)
module.exports = billModel;