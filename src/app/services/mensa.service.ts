import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MensaService {
  baseURL = "https://openmensa.org/api/v2/canteens?limit=100";

  constructor(private http: HttpClient) { }

  public getCanteens() {
    return this.http.get(this.baseURL);
  }


  
}
