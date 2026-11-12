import test from 'node:test';
import assert from 'node:assert/strict';
import { slugify, truncate, formatBytes, pluralize } from '../src/index.js';

test('slugify creates slugs', () => {
  assert.equal(slugify('Crème Brûlée!'), 'creme-brulee');
  assert.equal(slugify('Hello World'), 'hello-world');
  assert.throws(() => slugify(42), TypeError);
});
test('truncate shortens safely', () => {
  assert.equal(truncate('hello world', 6), 'hello…');
  assert.equal(truncate('hello', 6), 'hello');
  assert.throws(() => truncate('hello', -1), TypeError);
});
test('formatBytes formats byte totals', () => {
  assert.equal(formatBytes(0), '0 B');
  assert.equal(formatBytes(2048), '2.0 KiB');
  assert.throws(() => formatBytes(-1), RangeError);
});
test('pluralize chooses basic plural labels', () => {
  assert.equal(pluralize(1, 'file'), 'file');
  assert.equal(pluralize(2, 'file'), 'files');
});
