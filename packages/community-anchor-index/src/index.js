import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function createAnchorIndex(headings){const seen=new Map;return headings.map(title=>{const k=slugify(title)||'section';const n=(seen.get(k)||0)+1;seen.set(k,n);return {title,id:k+(n>1?'-'+n:'')}})}
