import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function buildSitemap(origin,records){return '<?xml version="1.0"?><urlset>'+records.map(x=>'<url><loc>'+new URL('/blog/'+slugify(x.title),origin).href+'</loc></url>').join('')+'</urlset>'}
