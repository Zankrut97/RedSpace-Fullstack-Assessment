import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchBarComponent } from 'src/app/shared/components/search-bar/search-bar.component';
import { PersonList } from 'src/app/shared/utilities/personlist';
import { map } from 'rxjs/operators';
import { Person } from '../../models/person';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})

export class PersonComponent implements OnInit {

  public searchType: string = "Id";
  public personList!:PersonList[];
  public personData!:Person;
  public loading: boolean = false;
  public error: boolean = false;

  @ViewChild(SearchBarComponent) searchBar!: SearchBarComponent;

  constructor(private personService: PersonService ) {
    this.personList = [
      {id:1,name:"Luke Skywalker"},
      {id:2,name:"C-3PO"},
      {id:3,name:"R2-D2"},
      {id:4,name:"Darth Vader"},
      {id:5,name:"Leia Organa"},
      {id:6,name:"Owen Lars"},
      {id:7,name:"Beru Whitesun lars"},
      {id:8,name:"R5-D4"},
      {id:9,name:"Biggs Darklighter"},
      {id:10,name:"Obi-Wan Kenobi"},
      {id:11,name:"Anakin Skywalker"},
      {id:12,name:"Wilhuff Tarkin"},
    ];
  }
  
  ngOnInit(): void {}

  public search(){
    const personId =  this.searchBar.getSearchValue();

    if(personId) {
      this.loading = true;
      this.error = false;

      this.personService.getPerson(personId)
      .pipe(
        map(response => response.data)
      )
      .subscribe(
        (response: Person) => {
          this.personData = response;
          this.loading = false;
        },
        (error: HttpErrorResponse) => {
          this.error = true;
          this.loading = false;
        }
      );
    }  
  }

  public searchByType(type: string) {
    this.searchType = type;

    if(type === 'Name'){
      this.searchBar.inputSelected = undefined;    
      this.searchBar.populatePersonList(this.personList);
      this.searchBar.toggleInputBound(true); 
    } else if (type === 'Id'){
      this.searchBar.inputSelected = undefined;
      this.searchBar.toggleInputBound(false);
    }
  }
}
