import { ValidatorFn } from '@angular/forms';

export type TInput = 'password' | 'text' | 'email' | 'date';

export interface IInputConfig {
    label: string;
    type: TInput;
    name?: string;
    placeholder?: string;
    error?: string;
    value?: any;
    validators?: ValidatorFn[];
}