import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {summaryTable} from '../src/index.js';
test('store-summary-table: basic behavior',()=>{const result=summaryTable([{label:'A',count:2}]);assert.ok(result!==undefined);});
