import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormService } from './form.service';
import { IInputConfig } from '../../input/input.model';

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
  };
  nameControl = new FormControl();
  emailControl = new FormControl();



  rForm = this.fs.getForm();
  inputs = this.fs.inputs;
  constructor(private fs: FormService) { }

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
