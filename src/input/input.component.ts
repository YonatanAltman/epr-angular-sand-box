import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

export type TInput = 'password' | 'text' | 'email' | 'date';

export interface IInputConfig {
  title: string;
  type: TInput;
  name: string;
  error: string;
  value?: any;
}

@Component({
  selector: 'epr-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() config: IInputConfig;
  control = new FormControl();
  constructor() { }

  ngOnInit() {
  }

}
