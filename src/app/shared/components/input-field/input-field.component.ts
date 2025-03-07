import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  standalone: true,
})
export class InputFieldComponent implements OnInit {
  @Input() label: string = '';        // Texto do label
  @Input() placeholder: string = '';  // Placeholder do input
  @Input() helperText: string = '';   // Texto auxiliar abaixo do campo
  @Input() type: string = 'text';     // Tipo do input (text, password, email, etc.)
  constructor() { }

  ngOnInit() {
  }

}
