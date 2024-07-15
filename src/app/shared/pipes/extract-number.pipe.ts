import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractNumber'
})
export class ExtractNumberPipe implements PipeTransform {

  transform(value: string): string {
    const index = value.indexOf('-');
    return index !== -1 ? value.slice(index + 1) : value;
  }

}
