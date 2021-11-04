import { Component, OnInit } from '@angular/core';
import { SignupUserModel } from 'app/shared/models/signupUser.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

private registration: SignupUserModel = new SignupUserModel();
  constructor() { }

  ngOnInit(): void {
  }

}
