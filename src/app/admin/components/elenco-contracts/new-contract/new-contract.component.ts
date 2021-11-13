import { EPaymentType } from './../../../models/EPaymentType.enum';
import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { ContractModel } from 'app/admin/models/contract.model';
import { EAddressType } from 'app/admin/models/EAddressType.enum';
import { EDocType } from 'app/admin/models/EDocType.enum';
import { EStatoSim } from 'app/admin/models/EStatoSim.enum';
import { EStatoPraticaType } from 'app/admin/models/EStatoPraticaType.enum';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Address } from 'app/admin/models/address.model';


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


  constructor(private adminService: AdminService, private formBuilder: FormBuilder) { }

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
    this.buildContract();
    // if (valid) {
      this.modal = true;
      console.log(this.contractForm.value);
      console.log('model', this.contract);

      // this.adminService.addContract(this.contract).subscribe(
      //   (res) => {
      //     console.log(res)
      //   }
      // );
    // } else {
    //   console.log("compila tutti i campo");
    // }
  }

  copyToPlant(event: Event) {
    event.preventDefault();
    this.contract.managerData.plantLocationAddress = this.contract.personalData.address;
  }
  copyToShipping(event: Event) {
    event.preventDefault();
    this.contract.managerData.shippingAddress = this.contract.personalData.address;
  }

  registraBozza(event: Event) {
    event.preventDefault();
  }
  print(event: Event) {
    event.preventDefault();
    window.print()
  }

  buildContract() {

    console.log(this.contractForm.controls['surname']);
    // this.contract.accountingData.fileStatus = this.contractForm.controls['fileStatus'].value;
    // this.contract.accountingData.paymentType = this.contractForm.controls['paymentType'].value;
    // this.contract.accountingData.cardUserSurname = this.contractForm.controls['cardUserSurname'].value;
    // this.contract.accountingData.cardUserName = this.contractForm.controls['cardUserName'].value;
    // this.contract.accountingData.cardUserFiscalCode = this.contractForm.controls['cardUserFiscalCode'].value;
    // this.contract.accountingData.cardType = this.contractForm.controls['mamma'].value;
    // this.contract.accountingData.creditCardNumber = this.contractForm.controls['mamma'].value;
    // this.contract.accountingData.creditCardExpiryDate = this.contractForm.controls['mamma'].value;
    // this.contract.accountingData.IBANcode = this.contractForm.controls['mamma'].value;
    // this.contract.accountingData.paymentStatus = this.contractForm.controls['mamma'].value;
    // this.contract.accountingData.cashedByBrand = this.contractForm.controls['mamma'].value;
    // this.contract.accountingData.commissionAgent = this.contractForm.controls['mamma'].value;
    // this.contract.accountingData.agent = this.contractForm.controls['mamma'].value;

    // this.contract.managerData.manager = this.contractForm.controls['mamma'].value;
    // this.contract.managerData.package = this.contractForm.controls['package'].value;
    // this.contract.managerData.coverage = this.contractForm.controls['coverage'].value;
    // this.contract.managerData.additionalOptions = this.contractForm.controls['additionalOptions'].value;
    // this.contract.managerData.portability = this.contractForm.controls['portability'].value;
    // this.contract.managerData.portabilityNumber = this.contractForm.controls['portabilityNumber'].value;
    // this.contract.managerData.vodafoneStationSerial = this.contractForm.controls['vodafoneStationSerial'].value;
    // this.contract.managerData.simStatus = this.contractForm.controls['simStatus'].value;
    // this.contract.managerData.activationDate = this.contractForm.controls['activationDate'].value;
    // this.contract.managerData.serialSimOperator = this.contractForm.controls['serialSimOperator'].value;
    // this.contract.managerData.managerOfOrigin = this.contractForm.controls['managerOfOrigin'].value;
    // this.contract.managerData.newSimSerial = this.contractForm.controls['newSimSerial'].value;
    // this.contract.managerData.migrationCode = this.contractForm.controls['migrationCode'].value;
    // this.contract.managerData.simType = this.contractForm.controls['simType'].value;
    // this.contract.managerData.pod = this.contractForm.controls['pod'].value;
    // this.contract.managerData.pdr = this.contractForm.controls['pdr'].value;
    // this.contract.managerData.serialNumber = this.contractForm.controls['serialNumber'].value;
    // this.contract.managerData.previousSupplier = this.contractForm.controls['previousSupplier'].value;

    // this.contract.managerData.plantLocationAddress.addressType = this.contractForm.controls['plantAddressType'].value;
    // this.contract.managerData.plantLocationAddress.address = this.contractForm.controls['plantAddress'].value;
    // this.contract.managerData.plantLocationAddress.addressNumber = this.contractForm.controls['plantAddressNumber'].value;
    // this.contract.managerData.plantLocationAddress.zipCode = this.contractForm.controls['plantZipCode'].value;
    // this.contract.managerData.plantLocationAddress.location = this.contractForm.controls['plantLocation'].value;

    // this.contract.managerData.shippingAddress.addressType = this.contractForm.controls['shippingAddressType'].value;
    // this.contract.managerData.shippingAddress.address = this.contractForm.controls['shippingAddress'].value;
    // this.contract.managerData.shippingAddress.addressNumber = this.contractForm.controls['shippingAddressNumber'].value;
    // this.contract.managerData.shippingAddress.zipCode = this.contractForm.controls['shippingZipCode'].value;
    // this.contract.managerData.shippingAddress.location = this.contractForm.controls['shippingLocation'].value;


     this.contract.personalData.surname = this.contractForm.controls['surname'].value;
     this.contract.personalData.name = this.contractForm.controls['name'].value;
     this.contract.personalData.placeOfBirth = this.contractForm.controls['placeOfBirth'].value;
      this.contract.personalData.dateOfBirth = this.contractForm.controls['dateOfBirth'].value;
     this.contract.personalData.fiscalCode = this.contractForm.controls['fiscalCode'].value;
     this.contract.personalData.partitaIVA = this.contractForm.controls['partitaIVA'].value;
     this.contract.personalData.phoneNumber = this.contractForm.controls['phoneNumber'].value;
     this.contract.personalData.otherNumber = this.contractForm.controls['otherNumber'].value;
     this.contract.personalData.email = this.contractForm.controls['email'].value;
     //this.contract.personalData.documentType = this.contractForm.controls['documentType'].value;
     //this.contract.personalData.documentNumber = this.contractForm.controls['documentNumber'].value;
     //this.contract.personalData.placeOfIssue = this.contractForm.controls['placeOfIssue'].value;
     // this.contract.personalData.dateOfIssue = this.contractForm.controls['dateOfIssue'].value;
     // this.contract.personalData.expiryDate = this.contractForm.controls['expiryDate'].value;
     //this.contract.personalData.address.address = this.contractForm.controls['address'].value;
     //this.contract.personalData.address.addressNumber = this.contractForm.controls['addressNumber'].value;
     //this.contract.personalData.address.addressType = this.contractForm.controls['addressType'].value;
     //this.contract.personalData.address.location = this.contractForm.controls['location'].value;
     //this.contract.personalData.address.zipCode = this.contractForm.controls['zipCode'].value;

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

  changedAccounting(event: any) {

    if (event === 'TYPE_ACCOUNT') {
      this.panel2Shown = true;
      this.panel3Shown = true;
      this.panel1Shown = false;
    } else if (event === 'TYPE_CREDITCARD') {
      this.panel1Shown = true;
      this.panel2Shown = false;
      this.panel3Shown = true;
    } else {
      this.panel1Shown = false;
      this.panel2Shown = false;
      this.panel3Shown = false;
    }
  }

  closeModal(event: Event) {
    event.preventDefault();
    this.modal = false;
  }

  contractForm = this.formBuilder.group({
    surname: ['', [Validators.required]],
    name: [''],
    placeOfBirth: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
    fiscalCode: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
    partitaIVA: ['', [Validators.required]],

    addressGroup: this.formBuilder.group({
      addressType: ['', [Validators.required]],
      address: ['', [Validators.required]],
      addressNumber: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      location: ['', [Validators.required]],
    }),

    phoneNumber: ['', [Validators.required]],
    otherNumber: [''],
    email: ['', [Validators.required, Validators.email]],

    document: this.formBuilder.group({
      documentType: ['', [Validators.required]],
      documentNumber: ['', [Validators.required]],
      placeOfIssue: ['', [Validators.required]],
      dateOfIssue: ['', [Validators.required]],
      expiryDate: ['', [Validators.required]],
    }),

    managerData: this.formBuilder.group({
      manager: ['', [Validators.required]],
      package: ['', [Validators.required]],
      coverage: [''],
      additionalOptions: [''],
      portability: [''],
      portabilityNumber: [''],
      vodafoneStationSerial: [''],
      simStatus: [''],
      activationDate: [''],
      serialSimOperator: [''],
      managerOfOrigin: [''],
      newSimSerial: [''],
      migrationCode: [''],
      simType: [''],
      pod: [''],
      pdr: [''],
      serialNumber: [''],
      previousSupplier: [''],

      plantAddressGroup: this.formBuilder.group({
        plantAddressType: ['', [Validators.required]],
        plantAddress: ['', [Validators.required]],
        plantAddressNumber: ['', [Validators.required]],
        plantZipCode: ['', [Validators.required]],
        plantLocation: ['', [Validators.required]],
      }),

      shippingAddressGroup: this.formBuilder.group({
        shippingAddressType: ['', [Validators.required]],
        shippingAddress: ['', [Validators.required]],
        shippingAddressNumber: ['', [Validators.required]],
        shippingZipCode: ['', [Validators.required]],
        shippingLocation: ['', [Validators.required]],
      }),

      note: [''],
    }),

  })

  get surname(): AbstractControl {
    return this.contractForm.get('surname') as AbstractControl;
  }
  get placeOfBirth(): AbstractControl {
    return this.contractForm.get('placeOfBirth') as AbstractControl;
  }
  get dateOfBirth(): AbstractControl {
    return this.contractForm.get('dateOfBirth') as AbstractControl;
  }
  get fiscalCode(): AbstractControl {
    return this.contractForm.get('fiscalCode') as AbstractControl;
  }
  get partitaIVA(): AbstractControl {
    return this.contractForm.get('partitaIVA') as AbstractControl;
  }
  get addressType(): AbstractControl {
    return this.contractForm.get('addressType') as AbstractControl;
  }
  get address(): AbstractControl {
    return this.contractForm.get('address') as AbstractControl;
  }
  get addressNumber(): AbstractControl {
    return this.contractForm.get('addressNumber') as AbstractControl;
  }
  get location(): AbstractControl {
    return this.contractForm.get('location') as AbstractControl;
  }
  get phoneNumber(): AbstractControl {
    return this.contractForm.get('phoneNumber') as AbstractControl;
  }
  get email(): AbstractControl {
    return this.contractForm.get('email') as AbstractControl;
  }
  get documentType(): AbstractControl {
    return this.contractForm.get('documentType') as AbstractControl;
  }
  get documentNumber(): AbstractControl {
    return this.contractForm.get('documentNumber') as AbstractControl;
  }
  get placeOfIssue(): AbstractControl {
    return this.contractForm.get('placeOfIssue') as AbstractControl;
  }
  get dateOfIssue(): AbstractControl {
    return this.contractForm.get('dateOfIssue') as AbstractControl;
  }
  get expiryDate(): AbstractControl {
    return this.contractForm.get('expiryDate') as AbstractControl;
  }
  get manager(): AbstractControl {
    return this.contractForm.get('manager') as AbstractControl;
  }
  get package(): AbstractControl {
    return this.contractForm.get('package') as AbstractControl;
  }
  get plantAddressType(): AbstractControl {
    return this.contractForm.get('plantAddressType') as AbstractControl;
  }
  get plantAddress(): AbstractControl {
    return this.contractForm.get('plantAddress') as AbstractControl;
  }
  get plantAddressNumber(): AbstractControl {
    return this.contractForm.get('plantAddressNumber') as AbstractControl;
  }
  get plantZipCode(): AbstractControl {
    return this.contractForm.get('plantZipCode') as AbstractControl;
  }
  get plantLocation(): AbstractControl {
    return this.contractForm.get('plantLocation') as AbstractControl;
  }
  get shippingAddressType(): AbstractControl {
    return this.contractForm.get('shippingAddressType') as AbstractControl;
  }
  get shippingAddress(): AbstractControl {
    return this.contractForm.get('shippingAddress') as AbstractControl;
  }
  get shippingAddressNumber(): AbstractControl {
    return this.contractForm.get('shippingAddressNumber') as AbstractControl;
  }
  get shippingZipCode(): AbstractControl {
    return this.contractForm.get('shippingZipCode') as AbstractControl;
  }
  get shippingLocation(): AbstractControl {
    return this.contractForm.get('shippingLocation') as AbstractControl;
  }
}
