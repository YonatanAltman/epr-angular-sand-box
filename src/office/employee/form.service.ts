import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyValidators } from '../register/input.validators';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  getForm() {
    const form = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl(undefined, [Validators.minLength(2), Validators.maxLength(10)]),
      password: new FormControl('', MyValidators.ValidatePassword),
      phone: new FormControl('', MyValidators.ValidatePhone),
      email: new FormControl(undefined, Validators.email)
    });
    const b = false;

    return form;

  }
  setItems(list) {

  }
}
