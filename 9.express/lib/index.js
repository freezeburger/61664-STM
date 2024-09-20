const express = require('express');
const morgan = require('morgan');
const winston = require('winston');
const fsPromise = require('fs/promises');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const STATIC_FILES = './public';
const LOGS_HTTP = './logs/http';
const LOGS_APP = './logs/app';

const logger = winston.createLogger({
    format: winston.format.json(),
    defaultMeta: { service: 'http-service' },
    transports: [
        new winston.transports.Console({ format: winston.format.simple() }),
        new winston.transports.File({ filename: LOGS_APP + '/app.log' })
    ]
});

const app = express();

const createDirIfNotExists = dirname =>
    fsPromise.access(dirname)
        .then(() => console.log(`Directory ${dirname} exists.`))
        .catch(() => fsPromise.mkdir(dirname, { recursive: true }));

createDirIfNotExists(LOGS_HTTP)
    .then(() => {

        const accessLogStream = fs.createWriteStream(path.join(LOGS_HTTP, 'access.log'), { flags: 'a' });
        app.use(morgan('combined', { stream: accessLogStream }));

        app.use(express.static(STATIC_FILES));

        app.use('/api', (req, res, next) => {
            console.log('Accessing API route');
            next();
        })

        app.get('/api', (req, res, next) => {
            res.send('API CALL RESPONSE');
        })

        app.listen(PORT, () => console.log(`Server started : http://localhost:${PORT}`))

    });

