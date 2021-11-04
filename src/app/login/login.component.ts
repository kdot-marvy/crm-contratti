import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginUserModel } from '../shared/models/loginUser.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginUser: LoginUserModel = new LoginUserModel();
  private submitted = false;
  private returnUrl = 'dashboard';
  private passwordErrorMsg;
  constructor(private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    ) {

      // redirect to restricted if already logged in
      // this.goToRestrited();

     }

  ngOnInit() {

    if (this.authenticationService.currentUserValue) {
      this.authenticationService.logout();
  }
    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'];

  }

  onSubmit(valid: boolean) {
    this.submitted = true;
    if (valid) {
      this.authenticationService.login(this.loginUser).subscribe(
        (res) => {
          if (res.accessToken) {
            this.goToRestrited();
          }
        },(error) => {
          if(error.status == 401){
            this.passwordErrorMsg = 'Username o Password errato'
          }
        }
      );
    }
  }

  goToRestrited() {
    if (this.authenticationService.currentUserValue) {
        this.router.navigate([this.returnUrl]);
    }
  }
}
