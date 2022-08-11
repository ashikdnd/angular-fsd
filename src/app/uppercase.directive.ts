import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {

  @HostListener('input', ['$event']) onKeyPress(event: any) {
    this.el.nativeElement.value = event.target.value.toUpperCase();
  }

  constructor(private el: ElementRef) { }

}
