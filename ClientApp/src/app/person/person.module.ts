import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PersonComponent } from './components/person/person.component';
import { PersonRoutingModule } from './person-routing.module';

@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PersonRoutingModule
  ]
})
export class PersonModule { }
