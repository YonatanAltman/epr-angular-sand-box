import { Component, OnInit, OnDestroy } from '@angular/core';
import { IEmployee } from '../employee/employee.model';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Observable, ReplaySubject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  oldEmployeesDoNotUse: IEmployee[] = [
    {
      id: 0,
      email: 'yonatan@yaltman.com',
      firstname: 'yonatan',
      lastname: 'yaltman',
    },
    {
      id: 1,
      email: 'maayan@yaltman.com',
      firstname: 'maayan',
      lastname: 'yaltman',
    },
    {
      id: 2,
      email: 'harry@yaltman.com',
      firstname: 'harry',
      lastname: 'harry',
    },
  ];
  private _employees$ = new ReplaySubject<IEmployee[]>(1);
  // private _employeesBehavior$ = new BehaviorSubject<IEmployee[]>([]);
  public get employees$(): Observable<IEmployee[]> {
    // return this._employees$;
    return this._employees$.asObservable();
  }
  _employeesFromServer = [];
  constructor(private app: AppService) {
    console.log('List Break😂');

  }
  onEmployeeEdit(employee: IEmployee) {
    console.log('edit', employee);
    // nav to
    const url = 'card';
    const url2 = 'card/' + employee.id;
    // this.router.navigate([url, { id: employee.id }]);
    this.app.navTo(url2);
  }
  ngOnInit() {
    const a = 4;
    const b = 5;
    const result = this.app.calc(a, b);

    // Create Http Request To Server
    const requestToServer = this.app.getAllUsers();

    // Call the Http Request
    requestToServer.subscribe(res => {
      console.log('Employess from server', res);
      this._employees$.next(res);

    });

  }

  ngOnDestroy() {

  }
}
