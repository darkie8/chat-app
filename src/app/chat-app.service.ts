import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/toPromise';
import { Cookie } from '../../node_modules/ng2-cookies/ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class ChatAppService {
  private ইউয়ারেল = 'https://chatapi.edwisor.com';
  constructor(private httpCall: HttpClient) { }

  public উপলব্ধ_করা_ব্যবহারকারীর_তথ্য_লকাল_স্টরেজে = () => {

    return JSON.parse(localStorage.getItem('ব্যবহারকারীর_তথ্য'));

  } // শেষ উপলব্ধ_করা_ব্যবহারকারীর_তথ্য_লকাল_স্টরেজে
  public ধার্য_করা_ব্যবহারকারীর_তথ্য_লকাল_স্টরেজে = (তথ্য) => {

    localStorage.setItem('ব্যবহারকারীর_তথ্য', JSON.stringify(তথ্য));


  }
  /**
   * সাইন_আপ_প্রক্রিয়া
   */
  public সাইন_আপ_প্রক্রিয়া(তথ্য): Observable<any> {
    const প্যারামস = new HttpParams()
      .set('firstName', তথ্য.নাম)
      .set('lastName', তথ্য.পদবী)
      .set('mobileNumber', তথ্য.মোবাইল)
      .set('email', তথ্য.ইমেইল)
      .set('password', তথ্য.পাসওয়ারড)
      .set('apiKey', তথ্য.এপিআইচাবি);
    return this.httpCall.post(`${this.ইউয়ারেল}/api/v1/users/signup`, প্যারামস);
  }
  /**
   * loginMethod
   */
  public লগ_ইন_প্রক্রিয়া(তথ্য): Observable<any> {
    const প্যারামস১ = new HttpParams()
      .set('email', তথ্য.ইমেইল)
      .set('password', তথ্য.পাসওয়ারড);
    return this.httpCall.post(`${this.ইউয়ারেল}/api/v1/users/login`, প্যারামস১);
  }

  public logout(): Observable<any> {

    const params = new HttpParams()
      .set('authToken', Cookie.get('authtoken'));

    return this.httpCall.post(`${this.ইউয়ারেল}/api/v1/users/logout`, params);

  } // end logout function



  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError

}
