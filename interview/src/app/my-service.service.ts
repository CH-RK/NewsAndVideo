import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http : HttpClient) { }

  getNewsFormAPI(){
    debugger;
    return this.http.get("https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-17&sortBy=publishedAt&apiKey=d0d3ecbe92204a95a5c3884eefefcb3f")
  }
}
