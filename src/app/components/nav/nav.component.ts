import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nav[appNav]',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent { 

  @Output() itemClicked = new EventEmitter<void>();

  public handleMenuClick() {
    this.itemClicked.emit();
  }

}
