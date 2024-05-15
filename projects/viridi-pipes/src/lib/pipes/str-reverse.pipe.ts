import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strReverse',
  standalone: true,
})
export class StrReversePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.split('').reverse().join('');
  }
}
