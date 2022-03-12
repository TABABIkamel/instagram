import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InstaService {
  uri:string=' http://127.0.0.1:5000/run'
  httpOptions = { headers: new HttpHeaders({
      'Content-Type': 'application/json'})}

  constructor(private http: HttpClient) { }

  getNombreJaime(urlInsta:string):Observable<any>{
    return this.http.post(this.uri,{'search':urlInsta},this.httpOptions)
  }
}
