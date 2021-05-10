import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import Url from 'src/app/shared/utilities/urls';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient:HttpClient) { }

  public getPerson(value: Number):Observable<any>{
    return this.httpClient.get(`${Url.PERSON_API_ENDPOINT}${value}`);
  }
}
