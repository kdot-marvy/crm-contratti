import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'app/shared/services/authentication.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminComponent implements OnInit {

  ngOnInit() {
    // if (!this.authenticationService.currentUserValue) {
    //   this.authenticationService.logout();
    // }
   }

   constructor(private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router){ }



}
