import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {countLabel} from '../src/index.js';
test('docs-count-labels: basic behavior',()=>{const result=countLabel(2);assert.ok(result!==undefined);});
