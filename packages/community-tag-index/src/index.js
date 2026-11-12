import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function indexTags(records){const m=new Map;for(const record of records)for(const tag of new Set((record.tags||[]).map(slugify))){m.set(tag,[...(m.get(tag)||[]),record])}return [...m].map(([tag,items])=>({tag,items,count:items.length}))}
