import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {createMetaTags} from '../src/index.js';
test('store-meta-tags: basic behavior',()=>{const result=createMetaTags({title:'Hello'});assert.ok(result!==undefined);});
