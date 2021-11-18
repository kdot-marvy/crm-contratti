import {Directive} from '@angular/core';
import {AbstractControl, ValidatorFn, Validator, FormControl, NG_VALIDATORS} from "@angular/forms";



const regExp = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
function validateregex(): ValidatorFn {
  return (c : AbstractControl) => {

    const isValid = regExp.test(c.value);
    if(isValid){
      return null;
    }else{
      return {
        emailValidate: {
          valid: false
        }
      };
    }

  }
}

@Directive({
  selector: '[emailValidator][ngModel]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true
  }]
})

export class EmailValidatorDirective implements Validator{

  validator: ValidatorFn;

  constructor() {
    this.validator = validateregex();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

}
