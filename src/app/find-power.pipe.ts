import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class FindPowerPipe implements PipeTransform {

  transform(value: number, exponent:number): unknown {
    return Math.pow(value, exponent);
  }

}
