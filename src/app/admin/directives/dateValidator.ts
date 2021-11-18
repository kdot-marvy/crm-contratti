import {Directive} from '@angular/core';
import {AbstractControl, ValidatorFn, Validator, FormControl, NG_VALIDATORS} from "@angular/forms";



const regExp = new RegExp('([0-2][0-9]||3[0-1])/(0[0-9]||1[0-2])/([0-9][0-9])?[0-9][0-9]$');
function validateregex(): ValidatorFn {
  return (c : AbstractControl) => {

    const isValid = regExp.test(c.value);
    if(isValid){
      return null;
    }else{
      return {
        dateValidate: {
          valid: false
        }
      };
    }

  }
}

@Directive({
  selector: '[dateValidator][ngModel]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: DateValidatorDirective, multi: true
  }]
})

export class DateValidatorDirective implements Validator{

  validator: ValidatorFn;

  constructor() {
    this.validator = validateregex();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

}
