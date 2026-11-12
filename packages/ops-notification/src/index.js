import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function createNotification(subject,message){return {id:slugify(subject),subject:truncate(subject,80),message:truncate(message,240),category:'ops'}}
