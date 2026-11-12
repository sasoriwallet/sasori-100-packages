import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {createAnchorIndex} from '../src/index.js';
test('generates stable unique anchor IDs',()=>{assert.deepEqual(createAnchorIndex(['Intro','Intro','Usage']),[{title:'Intro',id:'intro'},{title:'Intro',id:'intro-2'},{title:'Usage',id:'usage'}]);});
test('handles blank headings',()=>{assert.deepEqual(createAnchorIndex(['','']),[{title:'',id:'section'},{title:'',id:'section-2'}]);});
