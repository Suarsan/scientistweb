import { BrowserModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { translateBrowserLoaderFactory } from './loaders/translate-browser.loader';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { PrizesComponent } from './components/prizes/prizes.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { CongressesComponent } from './components/congresses/congresses.component';
import { PressComponent } from './components/press/press.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CompetenciesComponent } from './components/competencies/competencies.component';
import { EducationComponent } from './components/education/education.component';
import { LangsComponent } from './components/langs/langs.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    PrizesComponent,
    PublicationsComponent,
    CongressesComponent,
    PressComponent,
    ExperienceComponent,
    SkillsComponent,
    CompetenciesComponent,
    EducationComponent,
    NavComponent,
    HeaderComponent,
    AboutComponent,
    LangsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TransferHttpCacheModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: translateBrowserLoaderFactory,
          deps: [HttpClient, TransferState]
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
