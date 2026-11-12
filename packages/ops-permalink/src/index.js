import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function buildPermalink(title){const slug=slugify(title);if(!slug)throw new Error('invalid title');return '/ops/'+slug}
