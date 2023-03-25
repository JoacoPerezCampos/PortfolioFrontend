import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HsSkills } from '../model/hs-skills';

@Injectable({
  providedIn: 'root'
})
export class HsSkillsService {
  URL = 'http://localhost:8080/skills/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<HsSkills[]>{
    return this.httpClient.get<HsSkills[]>(this.URL + 'list')
  }

  public detail(id: number): Observable<HsSkills>{
    return this.httpClient.get<HsSkills>(this.URL + `detail/${id}`);
  }
  public save(hsSkills: HsSkills): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', hsSkills);
  }

  public update(id: number, hsSkills: HsSkills): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, hsSkills);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
