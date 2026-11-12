# sasori-mini-utils

A small dependency-free JavaScript ESM utility library. Exports `slugify`, `truncate`, `formatBytes`, and `pluralize`.

```js
import { slugify, truncate, formatBytes, pluralize } from 'sasori-mini-utils';
slugify('Crème Brûlée!'); // 'creme-brulee'
truncate('hello world', 6); // 'hello…'
formatBytes(2048); // '2.0 KiB'
pluralize(2, 'file'); // 'files'
```

Node.js 18+. From the repository root run `npm install` then `npm test`, and inspect what would be published with `npm pack --dry-run --workspace=core`.

Repository: https://github.com/sasoriwallet/sasori-100-packages

**Not yet published to npm.** Publication requires authorization from the npm package owner.
