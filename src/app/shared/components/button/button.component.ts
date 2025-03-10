import {CommonModule, NgClass} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [NgClass, CommonModule],
})
export class ButtonComponent {
  @Input({alias: 'size'}) size: string = 'small';
  @Input({alias: 'variant'}) variant: string = 'primary';
  @Input({alias: 'loading'}) loading: boolean = false;
  @Input({alias: 'disabled'}) disabled: boolean = false;
  @Output() buttonClick = new EventEmitter<Event>();
  constructor() {}

  handleClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.buttonClick.emit(event);
    }
  }
}
