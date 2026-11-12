import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {checkQuota} from '../src/index.js';
test('store-byte-quota: basic behavior',()=>{const result=checkQuota(2,10,3);assert.ok(result!==undefined);});
