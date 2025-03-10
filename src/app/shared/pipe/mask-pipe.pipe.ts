import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mask',
  standalone: true,
})
export class MaskPipe implements PipeTransform {
  transform(value: string, mask: string): string {
    if (!value) {
      return '';
    }

    let formattedValue = '';
    let valueIndex = 0;

    for (let i = 0; i < mask.length; i++) {
      if (mask[i] === '0') {
        if (value[valueIndex]) {
          formattedValue += value[valueIndex];
          valueIndex++;
        } else {
          break;
        }
      } else {
        formattedValue += mask[i];
      }
    }

    return formattedValue;
  }
}
