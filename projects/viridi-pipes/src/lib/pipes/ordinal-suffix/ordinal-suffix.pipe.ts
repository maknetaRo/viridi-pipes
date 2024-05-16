import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinalSuffix',
  standalone: true,
})
export class OrdinalSuffixPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) return value.toString();
    let valueStr = value.toString();
    let ending = '';
    if (valueStr.endsWith('1') && !valueStr.endsWith('11')) {
      ending = 'th';
    } else if (valueStr.endsWith('2') && !valueStr.endsWith('12')) {
      ending = 'nd';
    } else if (valueStr.endsWith('3') && !valueStr.endsWith('13')) {
      ending = 'rd';
    } else {
      ending = 'th';
    }
    return valueStr + ending;
  }
}
