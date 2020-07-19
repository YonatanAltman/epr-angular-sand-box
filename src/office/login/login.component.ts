import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

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
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  submit() {
    const { username, password } = this;
    const username1 = this.username;
    const password1 = this.password;


    const user = { username, password };

    console.log(user);
    this.userService.login(user).subscribe(res => {
      console.log('Response From Server', res);

    });


  }

}
