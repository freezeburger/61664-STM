const fs = require('fs');
const path = require('path');

const express = require('express');
const morgan = require('morgan');

const { createDirIfNotExists } = require('./utils');

const app = express();

module.exports = (LOGS_HTTP, STATIC_FILES, PORT = 3000) => {

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
}
