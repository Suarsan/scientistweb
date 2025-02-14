import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'header[appHeader]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent { 

  @Input() fixed: boolean;
  @Output() menuClicked = new EventEmitter<void>();
  @HostBinding('class.fixed') get applyFixedClass() {
      return this.fixed;
  }

}
