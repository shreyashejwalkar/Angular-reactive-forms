import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url="http://localhost:3000/enroll";
  constructor(private http : HttpClient) { }

  //make http post request  and send data to server and post return data as observable
  register(userData)
  {
    return this.http.post<any>(this._url, userData);
  }
}
