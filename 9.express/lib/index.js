require('dotenv').config();
const logger = require('./logger');

logger.info('Application Starting');

require('./http-server')(
    process.env.LOGS_HTTP, 
    process.env.STATIC_FILES, 
    process.env.PORT
);
