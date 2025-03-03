import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { WebsiteFormField } from '../../interface/form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsubmissionAPIService {

  constructor(private api: ApiService) { }

  formSubmit = (url: string, data: WebsiteFormField): Observable<WebsiteFormField> => {
    return this.api.post(url, data);
  }
}
