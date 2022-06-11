import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sidebarToggled: any;

  constructor() { }

  ngOnInit(): void {
  }

toggleSidebar() {
  this.sidebarToggled.emit();
}
}
