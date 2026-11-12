import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {createExcerpt} from '../src/index.js';
test('removes basic Markdown markers and truncates',()=>{assert.equal(createExcerpt('Hello *world*',9),'Hello wo…');});
test('normalizes whitespace',()=>{assert.equal(createExcerpt('# Hello   world',100),'Hello world');});
test('leaves short plain text intact',()=>{assert.equal(createExcerpt('Short',80),'Short');});
