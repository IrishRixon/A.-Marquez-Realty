import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebsiteFormField } from '../../interface/form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  post<T>(url: string, data: WebsiteFormField ): Observable<T> {
    return this.http.post(url, data) as Observable<T>;
  }
}
