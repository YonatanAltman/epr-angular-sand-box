import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:54867/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  post = new Observable<any>(observer => {
    try {

      const result = goToServer();

      observer.next(result);
      observer.complete();

    } catch (error) {
      observer.error(error);
    }


  });
  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    const url = BASE_URL + 'user';
    return this.http.post(url, user);
  }


}
function goToServer() {
  return '';
}
