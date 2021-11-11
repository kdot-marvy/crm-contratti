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

  submit() {
    console.log(this.contractForm);

  }

  onSubmit(valid: boolean) {
    this.submitted = true;
    if (valid) {
      this.modal = true;
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
    // this.contract.personalData.dateOfBirth = "'12/03/2021'";
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

    accountingData: this.formBuilder.group({
      fileStatus: [''],
      paymentType: [''],
      cardUserSurname: [''],
      cardUserName: [''],
      cardUserFiscalCode: [''],
      cardType: [''],
      creditCardNumber: [''],
      creditCardExpiryDate: [''],
      IBANcode: [''],
      paymentStatus: [''],
      cashedByBrand: [''],
      commissionAgent: [''],
      agent: [''],
    })

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