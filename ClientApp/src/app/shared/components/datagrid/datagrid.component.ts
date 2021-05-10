import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/person/models/person';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})

export class DatagridComponent implements OnInit {

  @Input() personData!: Person; 

  constructor() { }

  ngOnInit(): void {
  }

}
