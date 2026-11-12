import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function filterUploads(files,{extensions=['txt','md','json'],maxBytes=1000000}={}){return files.filter(f=>f.size<=maxBytes&&extensions.includes((f.name.split('.').pop()||'').toLowerCase()))}
