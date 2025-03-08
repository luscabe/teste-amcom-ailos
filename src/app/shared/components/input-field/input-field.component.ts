import {NgClass} from '@angular/common';
import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {FormControl, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MaskDirective} from '../../../core/directives/mask.directive';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  standalone: true,
  imports: [FormsModule, NgClass, MaskDirective],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true,
    },
  ],
})
export class InputFieldComponent implements OnInit {
  @Input() label: string = ''; // Texto do label
  @Input() placeholder: string = ''; // Placeholder do input
  @Input() helperText: string = ''; // Texto auxiliar abaixo do campo
  @Input() type: string = 'text'; // Tipo do input (text, password, email, etc.)
  @Input() mask: string = ''; // Tipo do input (text, password, email, etc.)
  @Input() control!: FormControl;
  @Input() disabled: boolean = false;
  constructor() {}

  ngOnInit() {}

  value: string = '';
  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
