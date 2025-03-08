import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMask]',
  standalone: true,
})
export class MaskDirective {
  @Input('appMask') mask!: string;

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = this.el.nativeElement;
    const value = input.value.replace(/\D/g, '');
    let maskedValue = '';
    let maskIndex = 0;
    let valueIndex = 0;

    while (maskIndex < this.mask.length && valueIndex < value.length) {
      if (this.mask[maskIndex] === '0') {
        maskedValue += value[valueIndex];
        valueIndex++;
      } else {
        maskedValue += this.mask[maskIndex];
      }
      maskIndex++;
    }

    input.value = maskedValue;
  }
}
