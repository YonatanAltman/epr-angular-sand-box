import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './input.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  currentName: string;
  label = {
    name: 'First Name',
    firstname: 'First Name',
    lastname: 'Last Name',
    password: 'Password',
    phone: 'Phone',
    email: 'Email',
  };
  btn = {
    ok: 'legister',
    cancel: 'cancel',
  };
  controls = {
    firstname: 'firstname',
    lastname: 'lastname',
    password: 'password',
    phone: 'phone',
    email: 'email',
  }
  nameControl = new FormControl();
  emailControl = new FormControl();

  rForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl(undefined, [Validators.minLength(2), Validators.maxLength(10)]),
    password: new FormControl('', MyValidators.ValidatePassword),
    phone: new FormControl('', MyValidators.ValidatePhone),
    email: new FormControl(undefined, Validators.email)
  });
  constructor() { }

  ngOnInit() {
  }
  print() {
    console.log(this.rForm.value);

  }
  cancel() {
    this.rForm.reset();
  }
  print1() {
    console.log(this.nameControl.value);
    console.log(this.emailControl.value);

  }
}
