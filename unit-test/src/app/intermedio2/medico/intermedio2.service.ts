import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Intermedio2Service {

  constructor(
    public http: HttpClient
  ) { }

  getMeducos() {
    return this.http.get('.....');
  }
  
}
