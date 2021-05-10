import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {FormsModule} from '@angular/forms';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { DatagridComponent } from './components/datagrid/datagrid.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    NotfoundComponent,
    DatagridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[HeaderComponent,SearchBarComponent,NotfoundComponent,DatagridComponent]
})
export class SharedModule { }
