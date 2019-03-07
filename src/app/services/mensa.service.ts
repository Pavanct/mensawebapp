import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MensaService {
  baseURL = "https://openmensa.org/api/v2/canteens?limit=20";

  baseURL1 = "http://localhost:5000/mensas";

  constructor(private http: HttpClient) { }

  public getCanteens() {
    return this.http.get(this.baseURL1);
  }

  public getCanteensByPage(pagenumber: number){
    let url = "&" + pagenumber;
    return this.http.get(this.baseURL+url);
  }
  
}
