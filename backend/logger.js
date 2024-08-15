const winston = require('winston');

const LogFormat = winston.format.printf(({level, message, timestamp})=>{
return `${level} [${message}] :${timestamp}`
})

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(winston.format.timestamp(), LogFormat),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({filename : 'app.log'})
    ]
})

module.exports = logger;