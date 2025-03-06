import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule]
})
export class SidebarComponent implements OnInit {

  sidebarOptions = [
    {
      icon: 'search',
      title: 'Home',
      route: '/home'
    },
    {
      icon: 'star',
      title: 'Usuários',
      route: '/users'
    },
    {
      icon: 'chat',
      title: 'Configurações',
      route: '/settings'
    },
    {
      icon: 'settings',
      title: 'Sair',
      route: '/logout'
    },
    {
      icon: 'landmark',
      title: 'Sobre',
      route: '/about'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
