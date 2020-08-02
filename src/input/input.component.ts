import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IInputConfig } from './input.model';



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
    this.control.valueChanges.subscribe((val => {
      console.log(val);

      this.onChangefn(val);
    }));
  }

}
