import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-registration-status-card',
  templateUrl: './registration-status-card.component.html',
  styleUrls: ['./registration-status-card.component.scss'],
  standalone: true,
})
export class RegistrationStatusCardComponent implements OnInit {
  @Input() client: {name: string; document: string; documentStatus: string} = {} as {
    name: string;
    document: string;
    documentStatus: string;
  };
  constructor() {}

  ngOnInit() {}
}
