import {createServer} from 'node:http';

console.log('Http Server !');


const middleware = (request:any,response:any) => {
    response.end('Good Day of Node');
}

createServer(middleware).listen(5050)

