import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function nineDigitsValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const isNineDigits = /^\d{9}$/.test(value);
    return isNineDigits ? null : {nineDigits: {value: value}};
  };
}
