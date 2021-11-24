import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import CodiceFiscale from 'codice-fiscale-js'


export function ValidatorCodiceFiscale(val: any): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

        // check if codice fiscale is valid
    console.log(control.value);
    // const year;
    // const month;
    // const day;
    // const birthOfPlace;

    // const indexYear = val.indexOf('-',0);
    // const personYear = val.substring(0,indexYear);



    // const indexDay = this.dateOfBirth.value.indexOf('-', 0);
    // const personDay = this.dateOfBirth.value.substring(indexYear + 1, indexYear + 3);

    // const indexMonth = val.indexOf('-',val.indexOf('-') + 1);
    // const personMonth = val.substring(indexMonth+ 1,this.dateOfBirth.value.length);



    // if (!isValid) {
    //   return { 'gte': true, 'requiredValue': val }
    // }

    // if(isValid){
    //   const personData = CodiceFiscale.computeInverse(this.fiscalCode.value);

    //   this.year = personData.year;
    //   this.month = personData.month;
    //   this.day = personData.day;
    //   this.birthOfPlace = personData.birthplace;

    //   console.log(personData.year,personData.day,personData.month,personData.birthplace);
    // }

    // if (this.placeOfBirth !== val.placeOfBirht || this.year !== personYear || this.month !==personMonth || this.day !== personDay) {
    //   return { 'gte': true, 'requiredValue': val }
    // }


    return null;

  }

}
