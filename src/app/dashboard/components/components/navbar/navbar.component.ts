import { SidebarComponent } from './../../sidebar/sidebar.component';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { ROUTES } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
private listTitles: any[];
  location: Location;
  mobile_menu_visible: any = 0;
private toggleButton: any;
private sidebarVisible: boolean;


  constructor(location: Location, private element: ElementRef, private router: Router) {
    this.location = location;
      this.sidebarVisible = false;
  }

  ngOnInit() {
    this.listTitles =
  }

}
