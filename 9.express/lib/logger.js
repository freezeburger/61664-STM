const winston = require('winston');

const LOGS_APP = './logs/app';

const logger = winston.createLogger({
    format: winston.format.json(),
    defaultMeta: { service: 'http-service' },
    transports: [
        new winston.transports.Console({ format: winston.format.simple() }),
        new winston.transports.File({ filename: LOGS_APP + '/app.log' })
    ]
});

module.exports = logger;