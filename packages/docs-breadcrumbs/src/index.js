import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function buildBreadcrumbs(titles){return titles.map((title,i)=>({label:truncate(title,40),href:'/docs/'+titles.slice(0,i+1).map(slugify).join('/')}))}
