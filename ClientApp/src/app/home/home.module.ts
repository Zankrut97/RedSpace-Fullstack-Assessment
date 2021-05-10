import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LandingpageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
