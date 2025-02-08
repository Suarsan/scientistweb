import { BrowserModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';
import { translateBrowserLoaderFactory } from './loaders/translate-browser.loader';
import { TransferHttpCacheModule } from '@nguniversal/common';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    SkillsComponent,
    SkillBarComponent
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
