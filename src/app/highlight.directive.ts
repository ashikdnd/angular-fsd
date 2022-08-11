import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseover') onMouseOver() {
    this.highlight('green')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('')
  }

  @HostListener('click') onClick() {
    window.alert('Clicked via Directive')
  }

  constructor(private el: ElementRef) {

  }

  highlight(color: string) {
    this.el.nativeElement.style.background = color;
  }

}
