import { Component, OnInit, NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
{ path: '/dashboard', title: 'Dasboard', icon: 'dashboard', class: '' },
{ path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
{ path: '/table-list', title: 'RTable List', icon: 'content_paste', class: '' },
{ path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
{ path: '/maps', title: 'Maps', icon: 'location', class: '' },
{ path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },

]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems!: any[];
  showMenu = false;
  routes = ChildrenOutletContexts;

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


