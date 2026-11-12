import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {buildRedirectTable} from '../src/index.js';
test('blog-redirect-table: basic behavior',()=>{const result=buildRedirectTable([['/old','/new']]);assert.ok(result!==undefined);});
