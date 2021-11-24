import { AdminService } from './../../../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-detail-contract',
  templateUrl: './details-contract.component.html',
  styleUrls: ['./details-contract.component.css']
})
export class DetailsContractComponent implements OnInit {
  routerUnsubscriber : Subscription;
  selectedContract: any;

  constructor(private route: ActivatedRoute, private adminService: AdminService){
  }

  ngOnInit(){
    this.routerUnsubscriber = this.route.queryParams.subscribe((param) => {
      if(param.id != null && param.id !== ''){
        this.adminService.getContract(param.id).subscribe(
          (contract: any) =>{
            this.selectedContract = contract;
            console.log(contract);
            // this.contractForm.patchValue(contract);
          }
        );
      }
    })
  }

}
