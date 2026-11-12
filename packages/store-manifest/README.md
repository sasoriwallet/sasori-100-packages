# @himthegoattt/store-manifest

Create a normalized file asset manifest with slugs and formatted byte sizes.

Depends on [sasori-mini-utils](https://www.npmjs.com/package/sasori-mini-utils) version 0.1.x.

```js
import { createManifest } from '@himthegoattt/store-manifest';
console.log(createManifest([{name:'Cover.jpg',size:1536}]));
// [{name:'Cover.jpg',slug:'cover-jpg',bytes:1536,size:'1.5 KiB'}]
```

Requires Node.js 18 or later. MIT licensed.
