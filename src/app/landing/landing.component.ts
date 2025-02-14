import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent { 
  
  navMode: boolean;
  scrollPos: number;
  showMenu: boolean;

  constructor(private router: Router) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  public handleShowMenuClick() {
    this.showMenu = !this.showMenu;
  }

  public handleMenuItemClicked() {
    this.showMenu = false;
  }

}
