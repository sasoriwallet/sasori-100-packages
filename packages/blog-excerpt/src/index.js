import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function createExcerpt(text,maxLength=140){return truncate(text.replace(/[#*_\x60]/g,'').replace(/\s+/g,' ').trim(),maxLength)}
