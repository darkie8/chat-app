import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class ChatAppService {
  private url = 'https://chatapi.edwisor.com';
  constructor(private httpCall: HttpClient) { }

  /**
   * সাইন_আপ_প্রক্রিয়া
   */
  public সাইন_আপ_প্রক্রিয়া(data): Observable<any> {
    const params = new HttpParams()
      .set('firstName', data.নাম)
      .set('lastName', data.পদবী)
      .set('mobileNumber', data.মোবাইল)
      .set('email', data.ইমেইল)
      .set('password', data.পাসওয়ারড)
      .set('apiKey', data.এপিআইচাবি);
      return this.httpCall.post(`${this.url}/api/v1/users/signup`, params);
  }
  /**
   * loginMethod
   */
  public loginMethod(obj): Observable<any> {
    const params1 = new HttpParams()
    .set('email', obj.email)
    .set('password', obj.password);
    return this.httpCall.post(`${this.url}/api/v1/users/login`, params1);
  }
}
