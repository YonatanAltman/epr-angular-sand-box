import { ValidatorFn } from '@angular/forms';

export type TInput = 'password' | 'text' | 'email' | 'date' | 'buttonGroup';

export interface IInputConfig {
    label: string;
    type: TInput;
    formControlName?: string;
    placeholder?: string;
    error?: string;
    value?: any;
    validators?: ValidatorFn[];
}