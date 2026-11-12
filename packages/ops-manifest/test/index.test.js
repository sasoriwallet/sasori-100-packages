import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {createManifest} from '../src/index.js';
test('ops-manifest: basic behavior',()=>{const result=createManifest([{name:'a.txt',size:12}]);assert.ok(result!==undefined);});
