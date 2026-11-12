# @himthegoattt/docs-anchor-index

Generate unique HTML anchor IDs for repeated documentation headings.

Depends on [sasori-mini-utils](https://www.npmjs.com/package/sasori-mini-utils) version 0.1.x.

```js
import { createAnchorIndex } from '@himthegoattt/docs-anchor-index';
console.log(createAnchorIndex(['Intro', 'Intro', 'Usage']));
// [{title:'Intro',id:'intro'},{title:'Intro',id:'intro-2'},{title:'Usage',id:'usage'}]
```

Requires Node.js 18 or later. MIT licensed.
