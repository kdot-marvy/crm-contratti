import {Directive} from '@angular/core';
import {AbstractControl, ValidatorFn, Validator, FormControl, NG_VALIDATORS} from "@angular/forms";



const regExp = new RegExp('^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$');
function validateregex(): ValidatorFn {
  return (c : AbstractControl) => {

    const isValid = regExp.test(c.value);
    if(isValid){
      return null;
    }else{
      return {
        fiscalCodeValidate: {
          valid: false
        }
      };
    }

  }
}

@Directive({
  selector: '[fiscalCodeValidator][ngModel]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: FiscalCodeValidatorDirective, multi: true
  }]
})

export class FiscalCodeValidatorDirective implements Validator{

  validator: ValidatorFn;

  constructor() {
    this.validator = validateregex();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

}
