import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {NotificationService} from '../../core/services/notification.service';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule],
})
export class SidebarComponent {
  sidebarOptions = [
    {
      icon: 'search',
      title: 'Home',
      route: '/home',
    },
    {
      icon: 'star',
      title: 'Usuários',
      route: '/users',
    },
    {
      icon: 'chat',
      title: 'Configurações',
      route: '/settings',
    },
    {
      icon: 'settings',
      title: 'Sair',
      route: '/logout',
    },
    {
      icon: 'landmark',
      title: 'Sobre',
      route: '/about',
    },
  ];

  constructor(private notificationService: NotificationService) {}

  comingSoon() {
    this.notificationService.show('Em breve', 'info');
  }
}
