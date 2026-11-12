import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {indexTags} from '../src/index.js';
test('docs-tag-index: basic behavior',()=>{const result=indexTags([{tags:['A','B']}]);assert.ok(result!==undefined);});
