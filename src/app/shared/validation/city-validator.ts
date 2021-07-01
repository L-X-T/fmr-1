import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { validCities } from './city-validator.directive';

export function validateCity(validCities: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    if (control.value && validCities.indexOf(control.value) === -1) {
      return {
        city: {
          actualValue: control.value,
          validCities: validCities
        }
      };
    }
    return null;
  };
}