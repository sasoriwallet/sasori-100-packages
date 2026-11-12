import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {buildPermalink} from '../src/index.js';
test('docs-permalink: basic behavior',()=>{const result=buildPermalink('Hello World');assert.ok(result!==undefined);});
