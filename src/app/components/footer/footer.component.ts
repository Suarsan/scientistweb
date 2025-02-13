import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'footer[appFooter]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private translateService: TranslateService) { }

  public spanish() {
    this.translateService.use('es');
  }

  public english() {
    this.translateService.use('en');
  }

  public languageInUse(lang) {
    if (this.translateService.currentLang === lang) {
      return true;
    }
    return false;
  }

}
