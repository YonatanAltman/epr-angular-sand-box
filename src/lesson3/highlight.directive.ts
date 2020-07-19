import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(elr: ElementRef) {
    elr.nativeElement.style.background = 'red';
    elr.nativeElement.innerText = this.calc();
  }

  calc() {
    return 28;
  }

}
