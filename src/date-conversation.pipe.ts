import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'dateConversion'
})
@Injectable()
export class DateConversionPipe implements PipeTransform {

    transform(value: any, args?: any): any {

        if (args === 'isoToLocale') {
            const d = value.split(/\D/);
            return new Date(d[0], d[1] - 1, d[2], d[3], d[4], d[5]);
        } else if (args === 'dateToIsoString') {
            return value.toISOString();
        }

        return value;
    }

}