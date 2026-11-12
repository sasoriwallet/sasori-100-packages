import {slugify,truncate,formatBytes,pluralize} from 'sasori-mini-utils';
export function summaryTable(rows){return rows.map(row=>({label:truncate(row.label,40),count:row.count,display:row.count+' '+pluralize(row.count,'docs item')}))}
