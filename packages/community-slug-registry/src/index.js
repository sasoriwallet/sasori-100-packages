import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function createSlugRegistry(records){const seen=new Set;return records.map(record=>{const k=slugify(record.title)||'item';let v=k,i=2;while(seen.has(v))v=k+'-'+i++;seen.add(v);return {...record,slug:v}})}
