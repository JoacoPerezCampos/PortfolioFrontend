import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  URL = 'http://localhost:8080/persons/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.URL + 'list');
  }

  public detail(id: number): Observable<Person> {
    return this.httpClient.get<Person>(this.URL + `detail/${id}`);
  }
  public save(person: Person): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', person);
  }

  public update(id: number, person: Person): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, person);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
