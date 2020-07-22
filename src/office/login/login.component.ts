import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;
  _currentName;
  label = {
    username: 'שם משתמש',
    password: 'סיסמה'
  };
  btn = {
    submit: 'התחבר',
  };
  constructor(private userService: UserService) {
    console.log('constructor', new Date());

  }


  names$ = new Observable<string[]>(observer => {
    try {
      setTimeout(() => {
        console.log('Someone called me!');

        observer.next(['yonatan', 'harry', 'maayan']);

        observer.complete();
      }, 1000 * 3);

    } catch (error) {
      observer.error(error);
    }
  });

  firstname$ = this.names$.pipe(
    map(list => list[0])
  );
  names2$ = this.names$;


  ngOnInit() {
    console.log('ngOnInit', new Date());
    this.getData();
  }

  getData() {
    this.names$.subscribe(names => {
      console.log('typeof names', typeof names);
      console.log('subscribe names$', names);

    }, error => {
      console.log(error);

    });
    this.names2$.subscribe(names2 => {
      console.log('typeof names2', typeof names2);
      console.log('subscribe names2$', names2);

    });
    this.firstname$.subscribe(nameFromObservable => {
      console.log('typeof name', typeof nameFromObservable);
      console.log('subscribe firstname$', nameFromObservable);
      this._currentName = nameFromObservable;
    });
    console.log('after all subscribes');

  }
  submit1() {
    const { username, password } = this;
    const username1 = this.username;
    const password1 = this.password;


    const user = { username, password };

    console.log(user);
    this.userService.login(user).subscribe(res => {
      console.log('Response From Server', res);

    });


  }
  submit(user) {
    console.log(user);
    const req = this.userService.login(user);
    req.subscribe(
      res => {
        console.log('Response From Server', res);

      },
      error => {
        console.error(error);

      },
      () => {
        // complete
      });

  }

}
