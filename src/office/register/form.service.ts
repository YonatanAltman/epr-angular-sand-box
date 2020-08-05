import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MyValidators } from './input.validators';
import { IInputConfig } from 'src/input/input.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  inputs: IInputConfig[] = [
    {
      formControlName: 'firstname',
      value: 'Maayan',
      label: 'First Name',
      placeholder: 'Type your Firstname',
      type: 'text',
      validators: [Validators.required]
    },
    {
      formControlName: 'lastname',
      value: undefined,
      label: 'Last Name',
      type: 'text'
    },
    {
      formControlName: 'email',
      value: undefined,
      label: 'Email',
      type: 'email',
      validators: [Validators.required, Validators.email]
    },
    {
      formControlName: 'password',
      value: undefined,
      label: 'Password',
      type: 'password',
      validators: MyValidators.ValidatePassword
    },
    {
      formControlName: 'phone',
      value: undefined,
      label: 'Phone',
      type: 'text',
      validators: [...MyValidators.ValidatePhone, Validators.required]
    },

  ];

  constructor(private fb: FormBuilder) {

  }

  getForm() {
    const form = this.fb.group({});

    this.inputs.forEach(i => {
      const control = this.fb.control(i.value, i.validators);
      form.addControl(i.formControlName, control);
    });
    return form;
  }
  getForm2() {
    const lastnameValidators = [...MyValidators.ValidatePassword, Validators.maxLength(5)];
    const form = this.fb.group({
      firstname: 'yonatan',
      lastname: ['Altman', Validators.compose(lastnameValidators)],
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
