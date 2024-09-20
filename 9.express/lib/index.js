
const PORT = 3000;
const STATIC_FILES = './public';
const LOGS_HTTP = './logs/http';
const LOGS_APP = './logs/app';

require('./http-server')(LOGS_HTTP, STATIC_FILES, PORT);