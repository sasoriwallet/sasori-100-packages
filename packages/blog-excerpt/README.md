# @himthegoattt/blog-excerpt

Create clean, length-limited excerpts from Markdown-like blog text.

Depends on [sasori-mini-utils](https://www.npmjs.com/package/sasori-mini-utils) version 0.1.x.

```js
import { createExcerpt } from '@himthegoattt/blog-excerpt';
console.log(createExcerpt('Hello *world*', 9));
// 'Hello wo…'
```

Requires Node.js 18 or later. MIT licensed.
