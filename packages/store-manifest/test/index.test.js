import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {createManifest} from '../src/index.js';
test('creates useful file manifest metadata',()=>{assert.deepEqual(createManifest([{name:'Cover.jpg',size:1536}]),[{name:'Cover.jpg',slug:'cover-jpg',bytes:1536,size:'1.5 KiB'}]);});
test('empty input returns an empty manifest',()=>{assert.deepEqual(createManifest([]),[]);});
