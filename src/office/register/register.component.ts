import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  label = {
    name: 'First Name',
    email: 'Email',
  }
  nameControl = new FormControl();
  emailControl = new FormControl();
  constructor() { }

  ngOnInit() {
  }
  print() {
    console.log(this.nameControl.value);
    console.log(this.emailControl.value);

  }
}
