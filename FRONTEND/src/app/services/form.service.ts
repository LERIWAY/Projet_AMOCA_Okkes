import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }
  saveForm(nom: string | undefined | null, prenom: string | undefined | null, adresse: string | undefined | null, cp: string | undefined | null, pays: string | undefined | null, ville: string | undefined | null, tel: string | undefined | null, email: string | undefined | null, genre: string | undefined | null, login: string | undefined | null, password: string | undefined | null): Observable<any> {
    return this.http.put<any>(environment.apiurl + "saveForm", { login: login, password: password });
  }
}
