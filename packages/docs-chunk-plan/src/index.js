import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function planChunks(size,chunkSize=1024){if(!Number.isInteger(size)||size<0||!Number.isInteger(chunkSize)||chunkSize<1)throw new RangeError('size');const out=[];for(let start=0;start<size;start+=chunkSize)out.push({start,end:Math.min(size,start+chunkSize)});return out}
