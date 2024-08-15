const express = require('express');

// logger imports
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const createConnection  = require('./shared/db/connection.js');
const userRoutes = require('./modules/user/routes/user-route.js')


const app = express();

// server logger
const accessLogStream = fs.createWriteStream(path.join(__dirname,'access.log'),{flag : 'a'});
app.use(morgan('combined',{stream : accessLogStream}))

app.use(express.json());
app.use('/',userRoutes)

const PORT= 4444;
const promise = createConnection();

promise.then(()=>{
app.listen(PORT, (err)=>{
    if(err){
       console.log("APPLICATION CRASH",err);
    }else{
       console.log(`APPLICATION UP AND RUNNING AT PORT ${PORT}`);
    }
})
}).catch((err)=>{
    console.log("Application Can't UP DB is Down ")
})
