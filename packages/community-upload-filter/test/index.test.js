import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {filterUploads} from '../src/index.js';
test('community-upload-filter: basic behavior',()=>{const result=filterUploads([{name:'a.txt',size:2}]);assert.ok(result!==undefined);});
