import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {createSlugRegistry} from '../src/index.js';
test('blog-slug-registry: basic behavior',()=>{const result=createSlugRegistry([{title:'A'},{title:'A'}]);assert.ok(result!==undefined);});
