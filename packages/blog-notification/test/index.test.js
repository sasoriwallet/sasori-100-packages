import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {createNotification} from '../src/index.js';
test('blog-notification: basic behavior',()=>{const result=createNotification('Hi','Example');assert.ok(result!==undefined);});
