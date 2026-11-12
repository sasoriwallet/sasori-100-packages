import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {buildBreadcrumbs} from '../src/index.js';
test('docs-breadcrumbs: basic behavior',()=>{const result=buildBreadcrumbs(['One','Two']);assert.ok(result!==undefined);});
