import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "@env/environment";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url: string;
  endpoint: string;
  constructor(protected http: HttpClient) {
    this.url = environment.api;
    this.endpoint = 'Student';
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + this.endpoint + '/GetAll')
  }

  Save(data): Observable<any> {
    return this.http.post(this.url + this.endpoint,data)
  }

}
