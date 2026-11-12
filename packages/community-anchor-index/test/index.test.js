import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {createAnchorIndex} from '../src/index.js';
test('community-anchor-index: basic behavior',()=>{const result=createAnchorIndex(['A','A']);assert.ok(result!==undefined);});
