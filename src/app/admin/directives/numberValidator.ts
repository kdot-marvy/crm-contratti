import {Directive} from '@angular/core';
import {AbstractControl, ValidatorFn, Validator, FormControl, NG_VALIDATORS} from "@angular/forms";



const regExp = new RegExp('^(0|[1-9]\d*)$');
function validateregex(): ValidatorFn {
  return (c : AbstractControl) => {

    const isValid = regExp.test(c.value);
    if(isValid){
      return null;
    }else{
      return {
        numberValidate: {
          valid: false
        }
      };
    }

  }
}

@Directive({
  selector: '[numberValidator][ngModel]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: NumberValidatorDirective, multi: true
  }]
})

export class NumberValidatorDirective implements Validator{

  validator: ValidatorFn;

  constructor() {
    this.validator = validateregex();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

}
