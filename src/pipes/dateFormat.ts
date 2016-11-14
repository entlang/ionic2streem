import {Pipe, PipeTransform} from "@angular/core";
import * as moment from "moment";

@Pipe({
    name: 'dateFormat'
})
export class DateFormat implements PipeTransform {
    transform(unixTimestamp: any, args?: any): any {
     let d = new Date(unixTimestamp * 1000);
     return moment.utc(d).fromNow();
   }
}