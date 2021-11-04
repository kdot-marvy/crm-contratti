import { Component, OnInit } from '@angular/core';
import { AddressData } from 'app/admin/models/addressData';
import { ContractModel } from 'app/admin/models/contract.model';
import { EAddressType } from 'app/admin/models/EAddressType.enum';
import { EDocType } from 'app/admin/models/EDocType.enum';
import { EStatoSim } from 'app/admin/models/EStatoSim.enum';


@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.css']
})
export class NewContractComponent implements OnInit {


  private contract: ContractModel = new ContractModel();
  private submitted = false;

  isShown: boolean = false


  addresTypes = EAddressType;
  addressTypeKeys = [];

  docTypeKeys = [];
  docTypes = EDocType;

  EStatoSimKeys = [];
  EStatoSims = EStatoSim;

  // private addressType: AddressData;
  // private address: AddressData;
  // private addressNumber: AddressData;
  // private zipCode: AddressData;
  // private location: AddressData;

  constructor() { }

  ngOnInit(): void {

    this.addressTypeKeys = Object.keys(this.addresTypes);
    this.docTypeKeys = Object.keys(this.docTypes);
    this.EStatoSimKeys = Object.keys(this.EStatoSims);
  }


  output(event: any) {
    if (event === "1" || "2") {
      this.isShown = true;
    } else {
      this.isShown = false;
    }
  }

  onSubmit(valid: boolean) {
    this.submitted = true;
    if (valid) {
      console.log(this.contract);
    } else {
      console.log("compila tutti i campo");
    }
  }

  copyToPlant() {
    this.contract.addressData.plantLocationAddress = this.contract.addressData.address;
  }
  copyToShipping() {
    this.contract.addressData.shippingAddress = this.contract.addressData.address;
  }

  registraBozza(event: Event) {
    event.preventDefault();
  }
  print(event: Event){
    event.preventDefault();
    window.print()
  }
}
