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

  public loginUser: LoginUserModel = new LoginUserModel();
  private submitted = false;
  private returnUrl = 'restricted';
  constructor(private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    ) {

      // redirect to restricted if already logged in
      // this.goToRestrited();

     }

  ngOnInit() {

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];

  }

  onSubmit(valid: boolean) {
    this.submitted = true;
    if (valid) {
      this.authenticationService.login(this.loginUser).subscribe(
        (res) => {
          if (res.accessToken) {
            this.goToRestrited();
          }
        }
      );
    }
    console.warn(this.loginUser);
  }

  goToRestrited() {

    console.log(this.authenticationService.currentUserValue);

    if (this.authenticationService.currentUserValue) {
        this.router.navigate([this.returnUrl]);
    }
  }
}
