import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function makeFilename(title,extension='txt'){if(!/^[a-z0-9]+$/i.test(extension))throw new Error('invalid extension');return slugify(title)+'.'+extension.toLowerCase()}
