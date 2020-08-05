import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';
import { IInputConfig } from './input.model';
import { map, filter, debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';



@Component({
  selector: 'epr-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  disabled = false;
  @Input() config: IInputConfig;
  control = new FormControl();
  formEmployee = new FormGroup({
    firstname: new FormControl('Yonatan'),
    lastname: new FormControl('Altman'),
    email: new FormControl('Yonatan@Yonatan.com'),
    address: new FormGroup({

      city: new FormControl('Tirat Yehuda'),
      street: new FormControl('Tirat Yehuda'),
      house: new FormControl(120),
    }),
  });
  /**
   * 
   * @param _ ghost function to be override
   */
  onChangefn = (_) => _;

  constructor() { }
  /**
   * Change the control value from outside of InputComponent 
   */
  writeValue(obj: any): void {

    this.control.patchValue(obj);
  }
  registerOnChange(fn: any): void {
    // Override !!!
    this.onChangefn = fn;
  }
  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();

    }

  }

  ngOnInit() {
    this.control.valueChanges.pipe(
      debounceTime(1900),
      startWith(2000011111),
      filter(val => !!val),
      distinctUntilChanged(),
      map(val => {
        console.log(val);

        this.onChangefn(val);
      })
    ).subscribe();

  }
  printEmployee() {
    const form = this.formEmployee; // FormGroup

    const { controls } = form; // {key: AbstractControl, key: FormControl,, key: FormGroup , ... }

    const { firstname, lastname, email, address } = controls;

    // const { city } = (lastname as FormGroup).controls; // <-- error

    const { city } = (address as FormGroup).controls;

    if (firstname.valid && email.valid) {
      console.log('Employee', form.value); // <-- `FormGroup`'s value represent all FormControls values
      console.log('First Name', firstname.value);
      console.log('City:', city.value);

    }

    if (controls.firstname.valid && controls.email.valid) {

    }

    // const controls = form.controls; // FormGroup

  }

}
