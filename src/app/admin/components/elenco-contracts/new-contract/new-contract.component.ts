import { Component, OnInit } from '@angular/core';
import { ContractModel } from 'app/admin/models/contract.model';


@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.css']
})
export class NewContractComponent implements OnInit {


  private contract: ContractModel = new ContractModel();

  constructor() { }

  ngOnInit(): void {
  }

  isShown: boolean = false

  output(event:any){
   if(event === "1"||"2"){
     this.isShown=true;
   } else{
     this.isShown=false;
   }
  }
}
