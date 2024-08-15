const {billModel} = require('../models/bill-schema.js')
const {userModel} = require('../models/user-schema.js')

const getFriendList = async (req , res, next)=>{
    try{
const docs = await userModel.find({}).exec();
response.status(200).json({"products":docs});
    }catch(err){
response.status(500).json({message:'No Record Found, Some Error in DB'});
    }
}

const addBill = (req,next)=>{
    try{

    }catch(err){

    }
}


const addUser = (req,next)=>{
    try{

    }catch(err){

    }
}

module.exports = getFriendList;