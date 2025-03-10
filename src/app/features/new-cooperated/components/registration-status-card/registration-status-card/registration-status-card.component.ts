import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-registration-status-card',
  templateUrl: './registration-status-card.component.html',
  styleUrls: ['./registration-status-card.component.scss'],
  standalone: true,
})
export class RegistrationStatusCardComponent implements OnInit {
  @Input() client: {
    name: string;
    document: string;
    documentStatus: string;
    accounts: {cooperative: string; accountNumber: string; accountType: string}[];
  } = {} as {
    name: string;
    document: string;
    documentStatus: string;
    accounts: {cooperative: string; accountNumber: string; accountType: string}[];
  };
  constructor() {}

  ngOnInit() {}

  getIconSrc(type: string): string {
    switch (type) {
      case 'Reprovado':
        return '/assets/icons/error.svg';
      case 'Pendente':
        return '/assets/icons/info.svg';
      case 'Regular':
        return '/assets/icons/check-circle.svg';
      default:
        return '/assets/icons/info.svg';
    }
  }
}
