import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-account-card',
  templateUrl: './custom-account-card.component.html',
  styleUrls: ['./custom-account-card.component.scss'],
  standalone: true,
})
export class CustomAccountCardComponent implements OnInit {
  @Input() account: {
    cooperative: string;
    accountNumber: string;
    accountType: string;
  } = {} as {
    cooperative: string;
    accountNumber: string;
    accountType: string;
  };

  constructor() {}

  ngOnInit() {}
}
