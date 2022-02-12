import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }
  getSomeStuff(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos/1");
  }
}
