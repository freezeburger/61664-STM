
const fs = require('fs');
const path = require('path');
const fsPromise = require('fs/promises');

const FILENAME = path.resolve(
    __dirname,
    './../data/',
    'info'
)

const getDataSync = () => {
    const data = fs.readFileSync(FILENAME);
    //console.log('getDataSync', data.toString());
    return data;
}



const getDataCallback = (callback) => {

    if (typeof callback !== 'function') throw 'Callback must be a function';

    const handler = (err, data) => {
        if (err) throw err;
        //console.log('getDataCallback', data.toString());
        callback(data.toString());
    }

    fs.readFile(FILENAME, handler);

}



/**
 * Promise API
 * @returns {Promise<string>} Promise of file content
 * 
* @example
 * 
 * getDataPromise().then( data => console.log(data))
 */
const getDataPromise = async () => {
      const data = await fsPromise.readFile(FILENAME);

      //console.log('getDataPromise', data.toString());
      
      return data.toString();
}
/* 
const getDataPromise = () => {
    return fsPromise.readFile(FILENAME)
                    .then( data => data.toString() )
}
*/

const getDataStreamEvent = () => {

    const stream = fs.createReadStream(FILENAME);

    let data = '';
    stream.on('data', chunk => data += chunk.toString() );
    stream.on('end', () => stream.emit('complete', data.toString()) )

    return stream;
}

module.exports = {
    getDataSync,
    getDataCallback,
    getDataPromise,
    getDataStreamEvent
}




foo()

const foo = function (){}