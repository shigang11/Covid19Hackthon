import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TestCenter} from '../model/test-center';
//import {Observable} from 'rxjs/Observable';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestCenterService {
  private testCenterUrl = "http://localhost:8080/testCenters";
  constructor(private http: HttpClient) { }

  public getAll() : Observable<TestCenter[]>{
    return this.http.get<TestCenter[]>(this.testCenterUrl);
  }

  public add(testCenter: TestCenter){
    return this.http.post<TestCenter>(this.testCenterUrl, testCenter);
  }
}
