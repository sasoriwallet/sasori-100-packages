import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function countLabel(n){if(!Number.isInteger(n)||n<0)throw new RangeError('count');return n+' '+pluralize(n,'ops item')}
