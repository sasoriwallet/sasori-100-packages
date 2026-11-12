import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function matchRoute(path,routes){const p=slugify(path);return routes.find(route=>slugify(route.path)===p)||null}
