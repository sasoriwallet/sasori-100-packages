import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {estimateTransfer} from '../src/index.js';
test('store-transfer-estimate: basic behavior',()=>{const result=estimateTransfer(10,2);assert.ok(result!==undefined);});
