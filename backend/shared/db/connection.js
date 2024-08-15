const mongoose = require('mongoose');

const createConnection = async ()=>{
    try{
    const result = await mongoose.connect(`mongodb+srv://dandevayukta:H84PdE3jwmQ8VhRV@cluster0.pur17xe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    console.log("DB is connected");
    }
    catch(err){
        console.log("Error in DB connection");
        throw err;
    }
}

module.exports = createConnection;