import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class PservicesService {

  private url:string = "https://my-json-server.typicode.com/sharadkad/mockjson/db";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
   return this.http.get<IProduct[]>(this.url);
  }

  getLatestproduct(){

  }
}
