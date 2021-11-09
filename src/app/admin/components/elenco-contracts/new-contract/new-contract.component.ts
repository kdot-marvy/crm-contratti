import { EPaymentType } from './../../../models/EPaymentType.enum';
import { AdminService } from './../../../services/admin.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { ContractModel } from 'app/admin/models/contract.model';
import { EAddressType } from 'app/admin/models/EAddressType.enum';
import { EDocType } from 'app/admin/models/EDocType.enum';
import { EStatoSim } from 'app/admin/models/EStatoSim.enum';
import { EStatoPraticaType } from 'app/admin/models/EStatoPraticaType.enum';


@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.css']
})
export class NewContractComponent implements OnInit {


  private contract: ContractModel = new ContractModel();
  private submitted = false;
  public modal: boolean = false;

  panel1Shown = false;
  panel2Shown = false;
  panel3Shown = false;

  addresTypes = EAddressType;
  addressTypeKeys = [];

  docTypeKeys = [];
  docTypes = EDocType;

  paymentTypeKeys = [];
  paymentTypes = EPaymentType;

  EStatoPraticaTypeKeys = [];
  EStatoPraticaTypes = EStatoPraticaType;

  EStatoSimKeys = [];
  EStatoSims = EStatoSim;
  private jsonsBaseUrl = 'assets/js/';


  coperture: any = [];
  opzioniAggiuntive: any = [];
  portabilita: any = [];
  tipoSim: any = [];
  agenzie: any = [];
  gestori: any = [];


  // private addressType: AddressData;
  // private address: AddressData;
  // private addressNumber: AddressData;
  // private zipCode: AddressData;
  // private location: AddressData;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {

    this.addressTypeKeys = Object.keys(this.addresTypes);
    this.docTypeKeys = Object.keys(this.docTypes);
    this.EStatoSimKeys = Object.keys(this.EStatoSims);
    this.paymentTypeKeys = Object.keys(this.paymentTypes);
    this.EStatoPraticaTypeKeys = Object.keys(this.EStatoPraticaTypes);



    this.adminService.getJSON(this.jsonsBaseUrl + 'coperture.json').subscribe((data: any) => {
      this.coperture = data.coperture;
    });

    this.adminService.getJSON(this.jsonsBaseUrl + 'opzioniAggiuntive.json').subscribe((data: any) => {
      this.opzioniAggiuntive = data.opzioniAggiuntive;
    });

    this.adminService.getJSON(this.jsonsBaseUrl + 'portabilita.json').subscribe((data: any) => {
      this.portabilita = data.portabilita;
    });

    this.adminService.getJSON(this.jsonsBaseUrl + 'tipoSim.json').subscribe((data: any) => {
      this.tipoSim = data.tipoSim;
    });

    this.adminService.getJSON(this.jsonsBaseUrl + 'agenzie.json').subscribe((data: any) => {
      this.agenzie = data.agenzie;
    });

    this.adminService.getGestori().subscribe((data: any) => {
      this.gestori = data;
    });



  }



  onSubmit(valid: boolean) {
    this.submitted = true;
    if (valid) {
      this.modal=true;
      console.log(this.contract);
      this.adminService.addContract(this.contract).subscribe(
        (res) => {
          console.log(res)
        }
      );
    } else {
      console.log("compila tutti i campo");
    }
  }

  copyToPlant() {
    this.contract.managerData.plantLocationAddress = this.contract.personalData.address;
  }
  copyToShipping() {
    this.contract.managerData.shippingAddress = this.contract.personalData.address;
  }

  registraBozza(event: Event) {
    event.preventDefault();
  }
  print(event: Event) {
    event.preventDefault();
    window.print()
  }

  // output(event: any) {
  //   if (event === "1" || "2") {
  //     this.isShown = true;
  //   } else {
  //     this.isShown = false;
  //   }
  // }

  onKeydown(event) {

    this.contract.accountingData.fileStatus = 'mamma';
    this.contract.accountingData.paymentType = 'mamma';
    this.contract.accountingData.cardUserSurname = 'mamma';
    this.contract.accountingData.cardUserName = 'mamma';
    this.contract.accountingData.cardUserFiscalCode = 'mamma';
    this.contract.accountingData.cardType = 'mamma';
    this.contract.accountingData.creditCardNumber = 'mamma';
    this.contract.accountingData.creditCardExpiryDate = '"2012-3"';
    this.contract.accountingData.IBANcode = 'mamma';
    this.contract.accountingData.paymentStatus = 'mamma';
    this.contract.accountingData.cashedByBrand = 'mamma';
    this.contract.accountingData.commissionAgent = 'mamma';
    this.contract.accountingData.agent = 'mamma';

    this.contract.managerData.manager = 'mamma';
    this.contract.managerData.package = 'mamma';
    this.contract.managerData.coverage = 'mamma';
    this.contract.managerData.additionalOptions = 'mamma';
    this.contract.managerData.portability = 'mamma';
    this.contract.managerData.portabilityNumber = 'mamma';
    this.contract.managerData.vodafoneStationSerial = 'mamma';
    this.contract.managerData.simStatus = 'mamma';
    this.contract.managerData.activationDate = '"3/23/2012"';
    this.contract.managerData.serialSimOperator = 'mamma';
    this.contract.managerData.managerOfOrigin = 'mamma';
    this.contract.managerData.newSimSerial = 'mamma';
    this.contract.managerData.migrationCode = 'mamma';
    this.contract.managerData.simType = 'mamma';
    this.contract.managerData.pod = 'mamma';
    this.contract.managerData.pdr = 'mamma';
    this.contract.managerData.serialNumber = 'mamma';
    this.contract.managerData.previousSupplier = 'mamma';

    this.contract.managerData.plantLocationAddress.addressType = this.addresTypes.TYPE_VIA;
    this.contract.managerData.plantLocationAddress.address = 'mamma';
    this.contract.managerData.plantLocationAddress.addressNumber = 'mamma';
    this.contract.managerData.plantLocationAddress.zipCode = 'mamma';
    this.contract.managerData.plantLocationAddress.location = 'mamma';

    this.contract.managerData.shippingAddress.addressType = this.addresTypes['TYPE_VIA'];
    this.contract.managerData.shippingAddress.address = 'mamma';
    this.contract.managerData.shippingAddress.addressNumber = 'mamma';
    this.contract.managerData.shippingAddress.zipCode = 'mamma';
    this.contract.managerData.shippingAddress.location = 'mamma';


    this.contract.personalData.surname = 'mamma';
    this.contract.personalData.name = 'mamma';
    this.contract.personalData.placeOfBirth = 'mamma';
    // this.contract.personalData.dateOfBirth = 'mamma';
    this.contract.personalData.fiscalCode = 'mamma';
    this.contract.personalData.partitaIVA = 'mamma';
    this.contract.personalData.phoneNumber = 'mamma';
    this.contract.personalData.otherNumber = 'mamma';
    this.contract.personalData.email = 'mamma';
    this.contract.personalData.documentType = this.docTypes.TYPE_IDCARD;
    this.contract.personalData.documentNumber = 'mamma';
    this.contract.personalData.placeOfIssue = 'mamma';
    // this.contract.personalData.dateOfIssue = 'mamma';
    // this.contract.personalData.expiryDate = 'mamma';
    this.contract.personalData.address.address = 'mamma';
    this.contract.personalData.address.addressNumber = 'mamma';
    this.contract.personalData.address.addressType = this.addressTypeKeys[0];
    this.contract.personalData.address.location = 'mamma';
    this.contract.personalData.address.zipCode = 'mamma';

  }

  changedManager(gestore) {
    this.contract.managerData.manager = gestore.name;

    this.panel1Shown = false;
    this.panel2Shown = false;

    switch (gestore.panel) {
      case '1': {
        this.panel1Shown = true;
        break;
      }
      case '2': {
        this.panel2Shown = true;
        break;
      }
      default: {
        this.panel1Shown = false;
        this.panel2Shown = false;
        break;
      }
    }
  }

  changedAccounting(accounting) {
    this.contract.accountingData.paymentType = accounting.key;

    this.panel1Shown = false;
    this.panel2Shown = false;
    this.panel3Shown = false;

    switch (accounting.panel) {
      case '2': {
        this.panel2Shown = true;
        this.panel3Shown = true;
        break;
      }
      case '3': {
        this.panel1Shown = true;
        this.panel3Shown = true;
        break;
      }
      default: {
        this.panel1Shown = false;
        this.panel2Shown = false;
        this.panel3Shown = false;
        break;
      }
    }
  }

  showModal(event: Event){
    event.preventDefault();
    this.modal=true;
  }

  closeModal(event: Event){
    event.preventDefault();
    this.modal = false;
  }
}
