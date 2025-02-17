import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {  scrollPositionRestoration: 'enabled',
                                            anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
