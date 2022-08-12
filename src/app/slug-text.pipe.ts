import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugText'
})

export class SlugTextPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    if (value) {
      let sym = '';
      for (var i = 0; i < args[1]; i++) {
        sym += args[0];
      }
      return value.replaceAll(' ', sym);
    }
    return value;
  }

}
