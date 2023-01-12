import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catalogue } from '../component-catalogue/catalogue';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Client } from '../Class/client';
import { Product } from '../Class/product';
import { Environment } from '@angular/compiler-cli/src/ngtsc/typecheck/src/environment';

@Injectable({
  providedIn: 'root'
})
export class MonserviceService {

  constructor(private client: HttpClient) { }

  env = environment;
  apiUrl: string = environment.apiurl;

  getCatalogue(): Observable<Product[]> {
    //return this.client.get<Product[]>(this.env.catalogue);
    return this.client.get<Product[]>(this.apiUrl+"catalogue");
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };  

  // getAll(): Observable<Product[]> {
  //   console.log("get all");
  //   return this.http.get<Product[]>(this.apiUrl+"catalogue");
  // }
}
