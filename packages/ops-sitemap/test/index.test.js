import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {buildSitemap} from '../src/index.js';
test('ops-sitemap: basic behavior',()=>{const result=buildSitemap('https://example.com',[{title:'Hello'}]);assert.ok(result!==undefined);});
