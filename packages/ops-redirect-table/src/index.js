import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function buildRedirectTable(pairs){const m=new Map;for(const [from,to] of pairs){if(!from||!to||from===to)throw new Error('invalid redirect');m.set(from,to)}return m}
