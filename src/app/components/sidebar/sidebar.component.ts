import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/projects', title: 'Projects',  icon:'timeline', class: '' },
    { path: '/services', title: 'Services',  icon:'build', class: '' },
    { path: '/products', title: 'Products',  icon:'widgets', class: '' },
    { path: '/news', title: 'News',  icon:'public', class: '' },
    { path: '/users', title: 'Users',  icon:'people', class: '' },
    { path: '/user-types', title: 'User Types',  icon:'assignment_ind', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
