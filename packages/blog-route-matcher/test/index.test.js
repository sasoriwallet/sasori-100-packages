import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {matchRoute} from '../src/index.js';
test('blog-route-matcher: basic behavior',()=>{const result=matchRoute('/one',[{path:'/one'}]);assert.ok(result!==undefined);});
