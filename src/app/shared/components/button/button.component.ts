import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [NgClass, CommonModule]
})
export class ButtonComponent implements OnInit {
  @Input({alias: 'size'}) size: string = 'small';
  @Input({alias: 'variant'}) variant: string = 'primary';
  @Input({alias: 'loading'}) loading: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
