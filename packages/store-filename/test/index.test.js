import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {makeFilename} from '../src/index.js';
test('store-filename: basic behavior',()=>{const result=makeFilename('Hello World');assert.ok(result!==undefined);});
