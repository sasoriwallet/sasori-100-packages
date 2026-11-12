import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function summarizeAssets(files){const m=new Map;for(const f of files){const k=(f.name.split('.').pop()||'unknown').toLowerCase();const prev=m.get(k)||{count:0,bytes:0};m.set(k,{count:prev.count+1,bytes:prev.bytes+f.size})}return Object.fromEntries(m)}
