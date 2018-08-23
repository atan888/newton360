import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ReportService {
  

  private baseURL = "https://admin.staging.offcampuspartners.com/rest";
  constructor(private httpClient : HttpClient, private http:Http) {   }

  
  getActivityReport() {    
    let url = this.baseURL + "/active-listing-report?key=4760dbb1c7c64595cfb0ca913bc624b02676cf889c3d91aadf43bc7dd4a663f8";    
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;
    myHeaders.append('Accept', 'application/json');
    opt = new RequestOptions({
      headers: myHeaders
    });
    
    return this.http.get(url,opt)
    // ...and calling .json() on the response to return data
     .map((res:Response) => res.json())
     //...errors if any
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}