import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
  standalone: true,
})
export class InitialsPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    let initials = value
      .split(' ')
      .map((item) => item.slice(0, 1) + '.')
      .join('');
    return initials;
  }
}
