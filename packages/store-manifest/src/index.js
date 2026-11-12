import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function createManifest(files){return files.map(file=>({name:file.name,slug:slugify(file.name),bytes:file.size,size:formatBytes(file.size)}))}
