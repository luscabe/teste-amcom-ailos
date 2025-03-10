import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../core/services/notificationService.service';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private notificationService: NotificationService) {}

  comingSoon() {
    this.notificationService.show('Em breve', 'info');
  }
}
