import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function estimateTransfer(bytes,rate){if(!Number.isFinite(rate)||rate<=0||bytes<0)throw new RangeError('rate');return {seconds:bytes/rate,volume:formatBytes(bytes)}}
