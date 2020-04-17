import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Customer} from '../model/customer';
//import {Observable} from 'rxjs/Observable';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerUrl: string;

  constructor(private http: HttpClient) { 
      this.customerUrl = 'http://localhost:8080'
  }

  public findAll():Observable<Customer[]>{
    console.log("In customer service");
    return this.http.get<Customer[]>(this.customerUrl +"/all");
  }

  public save(cust: Customer){
    return this.http.post<Customer>(this.customerUrl +"/add", cust);
  }

}
