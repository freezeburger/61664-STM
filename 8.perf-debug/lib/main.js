// require('./measure');

let msg = 'Main';
const {Worker} = require('worker_threads');

const worker = new Worker('./lib/worker.js');
worker.on('message', (data) =>  console.log(data ) );

console.log(msg, process.pid, worker.threadId );


setTimeout(()=> false, 100000)


/* 
 try {
    reader.getDataCallback();
} catch (error) {
    console.log(error)
}
*/
