import { Component, OnInit } from '@angular/core';
import { PersonList } from '../../utilities/personlist';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {

  public isInputBounded: boolean = false;
  public inputSelected!: number | undefined;
  public inputList:PersonList[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public toggleInputBound(flag: boolean) {
    this.isInputBounded = flag;
  }
  
  public populatePersonList(list: PersonList[]) {
    this.inputList = list;
  }

  public getSearchValue() {
    return this.inputSelected; 
  }

}
