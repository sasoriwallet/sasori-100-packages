import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function createMetaTags({title,description=''}){return {title:truncate(title,70),description:truncate(description,160),slug:slugify(title)}}
