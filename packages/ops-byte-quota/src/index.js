import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function checkQuota(used,limit,incoming=0){if([used,limit,incoming].some(x=>!Number.isFinite(x)||x<0))throw new RangeError('bytes');return {allowed:used+incoming<=limit,remaining:Math.max(0,limit-used-incoming),label:formatBytes(Math.max(0,limit-used-incoming))}}
