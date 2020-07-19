import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;
  label = {
    username: 'שם משתמש',
    password: 'סיסמה'
  };
  btn = {
    submit: 'התחבר',
  };
  constructor() { }

  ngOnInit() {
  }
  submit() {
    const { username, password } = this;
    const user = { username, password };



  }

}
