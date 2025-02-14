import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'div[appLangs]',
  templateUrl: './langs.component.html',
  styleUrls: ['./langs.component.scss']
})
export class LangsComponent {

  @Input() theme: string;

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
