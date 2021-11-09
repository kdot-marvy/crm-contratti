import { Component, OnInit } from '@angular/core';
import { SignupUserModel } from 'app/shared/models/signupUser.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public registration: SignupUserModel = new SignupUserModel();
  public passwordError;
  private submitted: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(valid: boolean) {
    if (valid) {
      this.submitted = true;
      console.log(this.registration);
      
      if (this.registration.confirmPassword !== this.registration.password) {
        this.passwordError = 'La Password non è uguale';
      }else if(this.registration.confirmPassword === this.registration.password){
        this.passwordError = '';
      }
    }

  }

}
