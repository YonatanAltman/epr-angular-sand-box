import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee/employee.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  currentEmployee: IEmployee;
  version = '1.1.0';
  private _message = 'result is';
  private _id;
  private c = 9;

  constructor(private http: HttpClient, private router: Router) { }
  /**
   * 
   * @param a first number
   * @param b second number
   */
  public calc(a: number, b: number) {

    return a + b + this.c;
  }
  public navTo(rout: string) {
    this.router.navigate([rout]);
  }
  public getAllUsers() {
    const url = 'http://localhost:54867/api/user';
    return this.http.get<IEmployee[]>(url);
  }
}
