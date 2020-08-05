import { ValidatorFn } from '@angular/forms';

export type TInput = 'password' | 'text'| 'select' | 'email' | 'date' | 'buttonGroup';
export interface IListItem {
    label: any;
    value: any;
    color?: string;
}
export interface IInputConfig {
    label?: string;
    type: TInput;
    formControlName?: string;
    placeholder?: string;
    error?: string;
    value?: any;
    validators?: ValidatorFn[];
    list: IListItem[];
}
