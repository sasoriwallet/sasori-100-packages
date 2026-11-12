import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {summarizeAssets} from '../src/index.js';
test('ops-asset-report: basic behavior',()=>{const result=summarizeAssets([{name:'a.png',size:12}]);assert.ok(result!==undefined);});
