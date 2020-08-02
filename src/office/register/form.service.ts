import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MyValidators } from './input.validators';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb: FormBuilder) {

  }

  getForm() {
    const form = this.fb.group({
      firstname: 'yonatan',
      lastname: ['Altman', Validators.minLength(3)],
      password: undefined,
      phone: undefined,
      email: undefined
    });
    const b = false;

    return form;
  }
  getForm1() {
    const form = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl(undefined, [Validators.minLength(2), Validators.maxLength(10)]),
      password: new FormControl('', MyValidators.ValidatePassword),
      phone: new FormControl('', MyValidators.ValidatePhone),
      email: new FormControl(undefined, Validators.email)
    });
    const b = false;
    form.controls.firstname.disable();
    form.disable();
    return form;
  }
  setItems(list) {

  }
}
