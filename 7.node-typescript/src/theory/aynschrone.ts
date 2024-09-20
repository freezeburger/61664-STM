import {EventEmitter} from 'node:events';

const callback = (data:any) => console.log('callback', data);

/* setTimeout( callback, 500);

const emitter = new EventEmitter();
const CUSTOM_EVENT = 'Custom Event';

emitter.on(CUSTOM_EVENT, () => callback(CUSTOM_EVENT) );
emitter.emit(CUSTOM_EVENT);
 */


/* const LOGGER_EVENT = 'LOGGER Event';

class Logger extends EventEmitter{
    log(msg = 'Default message'){
        this.emit(LOGGER_EVENT, msg);
        console.log(msg);
    }
}

const logger = new Logger();

emitter.on(LOGGER_EVENT, () => callback(LOGGER_EVENT) );
logger.log()
 */


/* class Logger extends EventEmitter{
    
    static events = Object.freeze({
        LOGGER_EVENT: 'Logger Event'
    })

    log(msg = 'Default message'){
        this.emit(Logger.events.LOGGER_EVENT, msg);
        console.log(msg);
    }
}

const logger = new Logger();
logger.on(Logger.events.LOGGER_EVENT, () => callback(Logger.events.LOGGER_EVENT) );
logger.log(); */



/* const performTask = () => {

    return Promise.resolve(true);

} */

const performTask = async () => {
        return true;   
}

const wrap = async () => {
    const result = await performTask();
    return result;
}

wrap()
    .then(callback)
    .then( () => console.log('Done'));
