//https://nodejs.org/api/test.html#test-runner

const test = require('node:test');
const assert = require('node:assert');
const { getDataSync } = require('./file-reader');

test('Test', async (t) => {
    
    await t.test('Test 1', (t) => {
        const content = getDataSync();
        //FAIL
        assert.strictEqual(content, 'INFORMATION FROM FILE');
    });

    await t.test('Test 2', (t) => {

        assert.strictEqual(2, 2);
    });

}); 