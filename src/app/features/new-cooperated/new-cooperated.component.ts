import {Component, OnInit} from '@angular/core';
import {ButtonComponent} from '../../shared/components/button/button.component';
import {InputFieldComponent} from '../../shared/components/input-field/input-field.component';

@Component({
  selector: 'app-new-cooperated',
  templateUrl: './new-cooperated.component.html',
  styleUrls: ['./new-cooperated.component.scss'],
  standalone: true,
  imports: [ButtonComponent, InputFieldComponent],
})
export class NewCooperatedComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
