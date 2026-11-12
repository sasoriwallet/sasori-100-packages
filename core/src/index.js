export function slugify(s){if(typeof s!=='string')throw new TypeError('expected string');return s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
export function truncate(s,n=80){if(typeof s!=='string'||!Number.isInteger(n)||n<0)throw new TypeError('invalid input');return s.length>n?s.slice(0,Math.max(0,n-1))+'…':s}
export function formatBytes(n){if(!Number.isFinite(n)||n<0)throw new RangeError('invalid bytes');return n<1024?n+' B':(n/1024).toFixed(1)+' KiB'}
export function pluralize(n,s){return n===1?s:s+'s'}
