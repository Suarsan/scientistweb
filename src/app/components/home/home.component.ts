import { Component } from '@angular/core';

@Component({
  selector: 'section[appHome]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public downloadCV() {
    window.open('assets/elenamarotomartin_cv.pdf', '_blank');
    const anchor = document.createElement('a');
    anchor.setAttribute('href', 'assets/elenamarotomartin_cv.pdf');
    anchor.setAttribute('download', '');
    document.body.appendChild(anchor);
    anchor.click();
    anchor.parentNode.removeChild(anchor);
  }

}
