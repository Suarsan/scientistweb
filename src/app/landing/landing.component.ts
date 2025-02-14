import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent { 
  
  navMode: boolean;
  scrollPos: number;
  showMenu: boolean;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.dir(this.scrollPos)
  }

  public handleShowMenuClick() {
    this.showMenu = !this.showMenu;
  }

  public handleMenuItemClicked() {
    this.showMenu = false;
  }

}
