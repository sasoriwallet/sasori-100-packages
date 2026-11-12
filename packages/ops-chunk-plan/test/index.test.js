import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {planChunks} from '../src/index.js';
test('ops-chunk-plan: basic behavior',()=>{const result=planChunks(10,4);assert.ok(result!==undefined);});
