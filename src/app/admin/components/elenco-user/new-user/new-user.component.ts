import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { SignupUserModel } from 'app/admin/models/signupUser.model';
import { AuthenticationService } from 'app/shared/services/authentication.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  public registration: SignupUserModel = new SignupUserModel();
  public passwordError;
  private submitted: boolean = false;
  constructor(private authenticationService: AuthenticationService) { }


  Roles: Array<string>;

  ngOnInit(): void {
  }


  onSubmit(valid: boolean) {
    if (valid) {
      this.submitted = true;

      if(this.registration.confirmedPassword){
        this.authenticationService.signup(this.registration).subscribe(
          (res: any) => {
            alert(res.message);
          },
          (error) => {
            alert('errore');
          },
        );
      }else{
        this.passwordError = "password non uguale";
      }
    }

  }

}
