//measure.js

const reader = require('./file-reader');


/* console.time('Sync API 100'); // 5ms
for (let index = 0; index < 100; index++) {
    reader.getDataSync();
}
console.timeEnd('Sync API 100'); 


console.time('Sync API 1000');
for (let index = 0; index < 1000; index++) {
    reader.getDataSync();
}
console.timeEnd('Sync API 1000');


console.time('Sync API 5000'); // 280ms
for (let index = 0; index < 5000; index++) {
    reader.getDataSync();
}
console.timeEnd('Sync API 5000');

*/

/**
 * Sync
 * 100 = 5ms
 * 1000 = 34
 * 5000 = 146.525ms
 * */ 


/**
 * Callback
 * 100 = 19ms
 * 1000 = 51
 * 5000 = 188.443ms
 * */ 

/*
console.time('Callback API 5000');
for (let index = 0; index < 5000; index++) {
    reader.getDataCallback( () => { if(index === 4999 ) console.timeEnd('Callback API 5000') } );
}
*/

/**
 * Promise
 * 100 = 25ms
 * 1000 = 90
 * 5000 = 382ms
 * */ 

/* console.time('TOKEN');
for (let index = 0; index < 100; index++) {
    reader.getDataPromise().then( (content) =>{  if(index === 99 ) console.timeEnd('TOKEN') } );;
} */


/**
 * Stream
 * 100 = 36ms
 * 1000 = 125
 * 5000 = 555ms
 * */ 

console.time('TOKEN');
for (let index = 0; index < 5000; index++) {
    reader.getDataStreamEvent().on('complete', (content) => { if(index === 4999 ) console.timeEnd('TOKEN') } )
} 

/*




reader.getDataStreamEvent().on('complete', (content) => console.log('Stream Done.', content))
*/