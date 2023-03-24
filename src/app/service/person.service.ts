import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  
  constructor(private http: HttpClient) {}
    URL = 'http://localhost:8080/persons/'
    
    public getPerson(): Observable<Person>{
      return this.http.get<Person>(this.URL + 'get/profile');
    }
  
}
