import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {createExcerpt} from '../src/index.js';
test('blog-excerpt: basic behavior',()=>{const result=createExcerpt('Hello world',6);assert.ok(result!==undefined);});
