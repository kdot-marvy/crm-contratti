import { EPaymentType } from './../../../models/EPaymentType.enum';
import { AdminService } from './../../../services/admin.service';
import { Component, OnInit,TemplateRef, OnDestroy, ViewChild } from '@angular/core';
import { ContractModel } from 'app/admin/models/contract.model';
import { EAddressType } from 'app/admin/models/EAddressType.enum';
import { EDocType } from 'app/admin/models/EDocType.enum';
import { EStatoSim } from 'app/admin/models/EStatoSim.enum';
import { EStatoPraticaType } from 'app/admin/models/EStatoPraticaType.enum';
import { AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Address } from 'app/admin/models/address.model';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription, Observable } from 'rxjs';
import {DateValidatorDirective} from '../../../directives/dateValidator'
import {FiscalCodeValidatorDirective} from '../../../directives/fiscalCodeValidator'

import {EmailValidatorDirective} from '../../../directives/emailValidator'
import { NumberValidatorDirective } from '../../../directives/numberValidator';
import { HttpResponse, HttpEventType } from '@angular/common/http';



@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.css']
})
export class NewContractComponent implements OnInit, OnDestroy {


  private contract: ContractModel = new ContractModel();
  private submitted = false;
  public modal: boolean = false;
  private selectedContract = null;

  panel1Shown = false;
  panel2Shown = false;
  panel3Shown = false;

  addressTypes = EAddressType;
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

 packages: any = [];

  modalRef: BsModalRef;

  file : File;

  fileName1 = '';
  fileName2 = '';
  PDAfileName = '';
  moduloFileName = '';
  fileName = '';

  file1:File;
  file2:File;
  PDAfile:File;
  moduloFile:File;

  savedContractId;

  fileInfos: Observable<any>;



  contractForm: FormGroup;
  edit=false;

  @ViewChild('contractForm', { static: true }) contractInitForm;

  @ViewChild('attachments') attachment: any;

  fileList: File[] = [];
  listOfFiles: any[] = [];

  routerUnsubscriber : Subscription;

  formUnsubscriber : Subscription;

  _formValid:boolean;

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  previews: string[] = [];
  imageInfos?: Observable<any>;

  constructor(private modalService: BsModalService,private route: ActivatedRoute, private adminService: AdminService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.edit = false;
    // this.contractForm = this.formBuilder.group(
    //   {


    //     dati_anagrafici: this.formBuilder.group({
    //       surname: ['', [Validators.required]],
    //       name: [''],
    //       placeOfBirth: ['', [Validators.required]],
    //       dateOfBirth: ['', [Validators.required]],
    //       fiscalCode: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
    //       partitaIVA: ['', [Validators.required]],
    //       address: this.formBuilder.group({
    //         addressType: ['', [Validators.required]],
    //         address: ['', [Validators.required]],
    //         addressNumber: ['', [Validators.required]],
    //         codicePostale: ['', [Validators.required]],
    //         localita: ['', [Validators.required]],
    //       }),
    //       phoneNumber: ['', [Validators.required]],
    //       otherNumber: [''],
    //       email: ['', [Validators.required, Validators.email]],
    //       documentType: ['', [Validators.required]],
    //       documentNumber: ['', [Validators.required]],
    //       placeOfIssue: ['', [Validators.required]],
    //       dateOfIssue: ['', [Validators.required]],
    //       expiryDate: ['', [Validators.required]],
    //     }),

    //     contract_manager_data: this.formBuilder.group({
    //       manager_id: ['', [Validators.required]],
    //       pack: ['', [Validators.required]],
    //       coverage: [''],
    //       additionalOptions: [''],
    //       portability: [''],
    //       portabilityNumber: [''],
    //       vodafoneStationSerial: [''],
    //       simStatus: [''],
    //       activationDate: [''],
    //       serialSimOperator: [''],
    //       managerOfOrigin: [''],
    //       newSimSerial: [''],
    //       migrationCode: [''],
    //       simType: [''],
    //       pod: [''],
    //       pdr: [''],
    //       serialNumber: [''],
    //       previousSupplier: [''],

    //       plant_location_address: this.formBuilder.group({
    //         plantAddressType: ['', [Validators.required]],
    //         plantAddress: ['', [Validators.required]],
    //         plantAddressNumber: ['', [Validators.required]],
    //         codicePostale: ['', [Validators.required]],
    //         localita: ['', [Validators.required]],
    //       }),

    //       shipping_address: this.formBuilder.group({
    //         shippingAddressType: ['', [Validators.required]],
    //         shippingAddress: ['', [Validators.required]],
    //         shippingAddressNumber: ['', [Validators.required]],
    //         codicePostale: ['', [Validators.required]],
    //         localita: ['', [Validators.required]],
    //       }),

    //       note: [''],
    //     }),

    //     accountingData: this.formBuilder.group({
    //       fileStatus: [''],
    //       paymentType: [''],
    //       cardUserSurname: [''],
    //       cardUserName: [''],
    //       cardUserFiscalCode: [''],
    //       cardType: [''],
    //       creditCardNumber: [''],
    //       creditCardExpiryDate: [''],
    //       IBANcode: [''],
    //       paymentStatus: [''],
    //       cashedByBrand: [''],
    //       commissionAgent: [''],
    //       agent: [''],
    //     })

    //   })



     this.addressTypeKeys = Object.keys(this.addressTypes);
     this.docTypeKeys = Object.keys(this.docTypes);
     this.EStatoSimKeys = Object.keys(this.EStatoSims);
     this.paymentTypeKeys = Object.keys(this.paymentTypes);
     this.EStatoPraticaTypeKeys = Object.keys(this.EStatoPraticaTypes);
    // this.routerUnsubscriber = this.route.queryParams.subscribe((param)=> {
    //   this.selectedContract = param;
    //   if(this.selectedContract != null){
    //     this.edit = true;
    //     this. editContract(this.selectedContract);
    //   }
    // })

    // this.route.paramMap.subscribe(params => {
    //   const contractId = + params.get('id');
    //   if (contractId) {
    //     this.getContract(contractId);
    //   }
    // })



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

    this.adminService.getAllManagers().subscribe((data: any) => {
      this.gestori = data.content;
      this.gestori[1].panel = '1';
      this.gestori[2].panel = '2';
      console.log(this.gestori);

    });



  }


  // getContract(id, detail: any) {
  //   this.adminService.updateContract(id,detail).subscribe(
  //     (contract: ContractModel) => this.editContract(contract),
  //     (err: any) => console.log(err)
  //   );
  // }

  editContract(contract: any) {

    if(this.edit){
      this.contract.accountingData.fileStatus = contract.fileStatus ? contract.fileStatus || contract.fileStatus !== '' : '';
    this.contract.accountingData.paymentType = contract.paymentType ? contract.paymentType || contract.paymentType !== '' : '';
    this.contract.accountingData.cardUserSurname = contract.cardUserSurname ? contract.cardUserSurname || contract.cardUserSurname !== '' : '';
    this.contract.accountingData.cardUserName = contract.cardUserName ? contract.cardUserName || contract.cardUserName !== '' : '';
    this.contract.accountingData.cardUserFiscalCode = contract.cardUserFiscalCode ? contract.cardUserFiscalCode || contract.cardUserFiscalCode !== '' : '';
    this.contract.accountingData.cardType = contract.cardType ? contract.cardType || contract.cardType !== '' : '';
    this.contract.accountingData.creditCardNumber = contract.credit_card_number ? contract.credit_card_number || contract.credit_card_number !== '' : '';
    this.contract.accountingData.creditCardExpiryDate = contract.creditCardExpiryDate ? contract.creditCardExpiryDate || contract.creditCardExpiryDate !== '' : '';
    this.contract.accountingData.IBANcode = contract.ibancode ? contract.ibancode || contract.ibancode !== '' : '';
    this.contract.accountingData.paymentStatus = contract.paymentStatus ? contract.paymentStatus || contract.paymentStatus !== '' : '';
    this.contract.accountingData.cashedByBrand = contract.cashedByBrand ? contract.cashedByBrand || contract.cashedByBrand !== '' : '';
    this.contract.accountingData.commissionAgent = contract.commissionAgent ? contract.commissionAgent || contract.commissionAgent !== '' : '';
    this.contract.accountingData.agent = contract.agent ? contract.agent || contract.agent !== '' : '';

    if(contract.manager){
    this.contract.managerData.manager = contract.manager.id ? contract.manager.id || contract.manager.id !== '' : '';
    }
    this.contract.managerData.package = contract.pacchetto ? contract.pacchetto || contract.pacchetto !== '' : '';
    this.contract.managerData.coverage = contract.copertura ? contract.copertura || contract.copertura !== '' : '';
    this.contract.managerData.additionalOptions = contract.opzioniAggiuntive ? contract.opzioniAggiuntive || contract.opzioniAggiuntive !== '' : '';
    this.contract.managerData.portability = contract.portabilita ? contract.portabilita || contract.portabilita !== '' : '';
    this.contract.managerData.portabilityNumber = contract.numPortare ? contract.numPortare || contract.numPortare !== '' : '';
    // tslint:disable-next-line:max-line-length
    this.contract.managerData.vodafoneStationSerial = contract.vodafoneStationSerial ? contract.vodafoneStationSerial || contract.vodafoneStationSerial !== '' : '';
    this.contract.managerData.simStatus = contract.simStatus ? contract.simStatus || contract.simStatus !== '' : '';
    this.contract.managerData.activationDate = contract.dataAttivazione ? contract.dataAttivazione || contract.dataAttivazione !== '' : '';
    this.contract.managerData.serialSimOperator = contract.serialSimOperator ? contract.serialSimOperator || contract.serialSimOperator !== '' : '';
    this.contract.managerData.managerOfOrigin = contract.gestorePrev ? contract.gestorePrev || contract.gestorePrev !== '' : '';
    this.contract.managerData.newSimSerial = contract.newSimSerial ? contract.newSimSerial || contract.newSimSerial !== '' : '';
    this.contract.managerData.migrationCode = contract.codiceMigrazione ? contract.codiceMigrazione || contract.codiceMigrazione !== '' : '';
    this.contract.managerData.simType = contract.simType ? contract.simType || contract.simType !== '' : '';
    this.contract.managerData.pod = contract.pod ? contract.pod || contract.pod !== '' : '';
    this.contract.managerData.pdr = contract.pdr ? contract.pdr || contract.pdr !== '' : '';
    this.contract.managerData.serialNumber = contract.serialNumber ? contract.serialNumber || contract.serialNumber !== '' : '';
    // tslint:disable-next-line:max-line-length
    this.contract.managerData.previousSupplier = contract.fornitorePrecedente ? contract.fornitorePrecedente || contract.fornitorePrecedente !== '' : '';

    if(contract.shippingAddress){

    // tslint:disable-next-line:max-line-length
    this.contract.managerData.shippingAddress.address = contract.shippingAddress.indirizzo ? contract.shippingAddress.indirizzo || contract.shippingAddress.indirizzo !== '' : '';
    this.contract.managerData.shippingAddress.addressNumber = contract.shippingAddress.civico ? contract.shippingAddress.civico || contract.shippingAddress.civico !== '' : '';
    this.contract.managerData.shippingAddress.location = contract.shippingAddress.localita ? contract.shippingAddress.localita || contract.shippingAddress.localita !== '' : '';
    // tslint:disable-next-line:max-line-length
    this.contract.managerData.shippingAddress.addressType = contract.shippingAddress.tipoIndirizzo ? contract.tipoIndirizzo || contract.tipoIndirizzo !== '' : '';
    this.contract.managerData.shippingAddress.zipCode = contract.shippingAddress.codicePostale ? contract.shippingAddress.codicePostale || contract.shippingAddress.codicePostale !== '' : '';
    }
    if(contract.plantLocationAddress){


    this.contract.managerData.plantLocationAddress.address = contract.plantLocationAddress.indirizzo ? contract.plantLocationAddress.indirizzo || contract.plantLocationAddress.indirizzo !== '' : '';
    this.contract.managerData.plantLocationAddress.addressNumber = contract.plantLocationAddress.civico ? contract.plantLocationAddress.civico || contract.plantLocationAddress.civico !== '' : '';
    this.contract.managerData.plantLocationAddress.location = contract.plantLocationAddress.localita ? contract.plantLocationAddress.localita || contract.plantLocationAddress.agelocalitat !== '' : '';
    this.contract.managerData.plantLocationAddress.addressType = contract.plantLocationAddress.tipoIndirizzo ? contract.plantLocationAddress.tipoIndirizzo || contract.plantLocationAddress.tipoIndirizzo !== '' : '';
    this.contract.managerData.plantLocationAddress.zipCode = contract.plantLocationAddress.codicePostale ? contract.plantLocationAddress.codicePostale || contract.plantLocationAddress.codicePostale !== '' : '';

    }

    this.contract.personalData.surname = contract.cognome ? contract.cognome || contract.cognome !== '' : '';
    this.contract.personalData.name = contract.nome ? contract.nome || contract.nome !== '' : '';
    this.contract.personalData.placeOfBirth = contract.luogoNascita ? contract.luogoNascita || contract.luogoNascita !== '' : '';
    this.contract.personalData.dateOfBirth = contract.dataNascita ? contract.dataNascita || contract.dataNascita !== '' : '';
    this.contract.personalData.fiscalCode = contract.codiceFiscale ? contract.codiceFiscale || contract.codiceFiscale !== '' : '';
    this.contract.personalData.partitaIVA = contract.partitaIVA ? contract.partitaIVA || contract.partitaIVA !== '' : '';
    this.contract.personalData.phoneNumber = contract.numeroTelefono ? contract.numeroTelefono || contract.numeroTelefono !== '' : '';
    this.contract.personalData.otherNumber = contract.altroNumero ? contract.altroNumero || contract.altroNumero !== '' : '';
    this.contract.personalData.email = contract.email ? contract.email || contract.email !== '' : '';
    this.contract.personalData.documentType = contract.tipoDocumento ? contract.tipoDocumento || contract.tipoDocumento !== '' : '';
    this.contract.personalData.documentNumber = contract.numeroDocumento ? contract.numeroDocumento || contract.numeroDocumento !== '' : '';
    this.contract.personalData.placeOfIssue = contract.luogoRilascio ? contract.luogoRilascio || contract.luogoRilascio !== '' : '';
    this.contract.personalData.dateOfIssue = contract.dataRilascio ? contract.dataRilascio || contract.dataRilascio !== '' : '';
    this.contract.personalData.expiryDate = contract.dataScadenza ? contract.dataScadenza || contract.dataScadenza !== '' : '';

    if(contract.clientAddress){
 this.contract.personalData.address.address = contract.clientAddress.indirizzo ? contract.clientAddress.indirizzo || contract.clientAddress.indirizzo !== '' : '';
    this.contract.personalData.address.addressNumber = contract.clientAddress.civico ? contract.clientAddress.civico || contract.clientAddress.civico !== '' : '';
    this.contract.personalData.address.location = contract.clientAddress.localita ? contract.clientAddress.localita || contract.clientAddress.localita !== '' : '';
    this.contract.personalData.address.addressType = contract.clientAddress.tipoIndirizzo ? contract.clientAddress.tipoIndirizzo || contract.clientAddress.tipoIndirizzo !== '' : '';
    this.contract.personalData.address.zipCode = contract.clientAddress.codicePostale ? contract.clientAddress.codicePostale || contract.clientAddress.codicePostale !== '' : '';
    }

    }

  }

  onSubmit(valid: boolean,modal) {
    this.submitted = true;
    // this.closeModal();

     if (valid && this._formValid) {
      this.openModalWithClass(modal);

    //   if(!this.edit){

    //   } else {
    //     this.adminService.updateContract(this.selectedContract.id, this.contract).subscribe(
    //     (res) => {
    //       this.adminService.showToast('S','contratto modificato con success');
    //       this.contract = new ContractModel();
    //     },(err) => {
    //       this.adminService.showToast('E','inserimento contratto non riuscito');
    //     }
    //   );
    //   this.routerUnsubscriber.unsubscribe();

    //   }

    // } else {
    //   console.log("compila tutti i campo");
     }
  }

  registerContract(){
    this.adminService.addContract(this.contract).subscribe(
      (res:any) => {
        this.adminService.showToast('S', 'contratto inserito con success');
        this.contract = new ContractModel();
        this.savedContractId = res.id;
        if( this.savedContractId){
          this.upload();
        }
      },(err) => {
        this.adminService.showToast('E', 'inserimento contratto non riuscito');

      }
    );

    this.closeModal();
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

  changedManager(gestore) {


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

    this.adminService.getManager(gestore.id).subscribe((res:any) => {
        this.packages = res.packages;
    });
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

  closeModal() {
    event.preventDefault();
    this.modalRef.hide()
  }

  ngOnDestroy() {
    this.edit = false;
    this.selectedContract = null;
    if(this.routerUnsubscriber){
      this.routerUnsubscriber.unsubscribe();
    }
  }






  // get surname(): AbstractControl {
  //   return this.contractForm.get('surname') as AbstractControl;
  // }
  // get placeOfBirth(): AbstractControl {
  //   return this.contractForm.get('placeOfBirth') as AbstractControl;
  // }
  // get dateOfBirth(): AbstractControl {
  //   return this.contractForm.get('dateOfBirth') as AbstractControl;
  // }
  // get fiscalCode(): AbstractControl {
  //   return this.contractForm.get('fiscalCode') as AbstractControl;
  // }
  // get partitaIVA(): AbstractControl {
  //   return this.contractForm.get('partitaIVA') as AbstractControl;
  // }
  // get addressType(): AbstractControl {
  //   return this.contractForm.get('addressType') as AbstractControl;
  // }
  // get address(): AbstractControl {
  //   return this.contractForm.get('address') as AbstractControl;
  // }
  // get addressNumber(): AbstractControl {
  //   return this.contractForm.get('addressNumber') as AbstractControl;
  // }
  // get codicePostale(): AbstractControl {
  //   return this.contractForm.get('codicePostale') as AbstractControl;
  // }
  // get localita(): AbstractControl {
  //   return this.contractForm.get('localita') as AbstractControl;
  // }
  // get phoneNumber(): AbstractControl {
  //   return this.contractForm.get('phoneNumber') as AbstractControl;
  // }
  // get email(): AbstractControl {
  //   return this.contractForm.get('email') as AbstractControl;
  // }
  // get documentType(): AbstractControl {
  //   return this.contractForm.get('documentType') as AbstractControl;
  // }
  // get documentNumber(): AbstractControl {
  //   return this.contractForm.get('documentNumber') as AbstractControl;
  // }
  // get placeOfIssue(): AbstractControl {
  //   return this.contractForm.get('placeOfIssue') as AbstractControl;
  // }
  // get dateOfIssue(): AbstractControl {
  //   return this.contractForm.get('dateOfIssue') as AbstractControl;
  // }
  // get expiryDate(): AbstractControl {
  //   return this.contractForm.get('expiryDate') as AbstractControl;
  // }
  // get manager(): AbstractControl {
  //   return this.contractForm.get('manager') as AbstractControl;
  // }
  // get package(): AbstractControl {
  //   return this.contractForm.get('package') as AbstractControl;
  // }
  // get plantAddressType(): AbstractControl {
  //   return this.contractForm.get('plantAddressType') as AbstractControl;
  // }
  // get plantAddress(): AbstractControl {
  //   return this.contractForm.get('plantAddress') as AbstractControl;
  // }
  // get plantAddressNumber(): AbstractControl {
  //   return this.contractForm.get('plantAddressNumber') as AbstractControl;
  // }
  // // get codicePostale(): AbstractControl {
  // //   return this.contractForm.get('codicePostale') as AbstractControl;
  // // }
  // // get localita(): AbstractControl {
  // //   return this.contractForm.get('plantLocation') as AbstractControl;
  // // }
  // get shippingAddressType(): AbstractControl {
  //   return this.contractForm.get('shippingAddressType') as AbstractControl;
  // }
  // get shippingAddress(): AbstractControl {
  //   return this.contractForm.get('shippingAddress') as AbstractControl;
  // }
  // get shippingAddressNumber(): AbstractControl {
  //   return this.contractForm.get('shippingAddressNumber') as AbstractControl;
  // }
  // get shippingZipCode(): AbstractControl {
  //   return this.contractForm.get('shippingZipCode') as AbstractControl;
  // }
  // get shippingLocation(): AbstractControl {
  //   return this.contractForm.get('shippingLocation') as AbstractControl;
  // }

  onKeydown(event) {

    this.contract.accountingData.fileStatus = 'mamma';
    this.contract.accountingData.paymentType = 'TYPE_ACCOUNT';
    this.contract.accountingData.cardUserSurname = 'mamma';
    this.contract.accountingData.cardUserName = 'mamma';
    this.contract.accountingData.cardUserFiscalCode = 'mamma';
    this.contract.accountingData.cardType = 'mamma';
    this.contract.accountingData.creditCardNumber = 'mamma';
     this.contract.accountingData.creditCardExpiryDate = 'mamma';
    this.contract.accountingData.IBANcode = 'mamma';
    this.contract.accountingData.paymentStatus = 'mamma';
    this.contract.accountingData.cashedByBrand = 'mamma';
    this.contract.accountingData.commissionAgent = 'mamma';
    this.contract.accountingData.agent = 'mamma';

    // this.contract.managerData.manager = 'mamma';
    this.contract.managerData.package = 'mamma';
    this.contract.managerData.coverage = 'mamma';
    this.contract.managerData.additionalOptions = 'mamma';
    this.contract.managerData.portability = 'mamma';
    this.contract.managerData.portabilityNumber = 'mamma';
    this.contract.managerData.vodafoneStationSerial = 'mamma';
    this.contract.managerData.simStatus = 'mamma';
    this.contract.managerData.activationDate = 'mamma';
    this.contract.managerData.serialSimOperator = 'mamma';
    this.contract.managerData.managerOfOrigin = 'mamma';
    this.contract.managerData.newSimSerial = 'mamma';
    this.contract.managerData.migrationCode = 'mamma';
    this.contract.managerData.simType = 'mamma';
    this.contract.managerData.pod = 'mamma';
    this.contract.managerData.pdr = 'mamma';
    this.contract.managerData.serialNumber = 'mamma';
    this.contract.managerData.previousSupplier = 'mamma';

     this.contract.managerData.plantLocationAddress.addressType = 'TYPE_VIA';
    this.contract.managerData.plantLocationAddress.address = 'mamma';
    this.contract.managerData.plantLocationAddress.addressNumber = 'mamma';
    this.contract.managerData.plantLocationAddress.zipCode = 'mamma';
    this.contract.managerData.plantLocationAddress.location = 'mamma';

    this.contract.managerData.shippingAddress.addressType = 'TYPE_VIA';
    this.contract.managerData.shippingAddress.address = 'mamma';
    this.contract.managerData.shippingAddress.addressNumber = 'mamma';
    this.contract.managerData.shippingAddress.zipCode = 'mamma';
    this.contract.managerData.shippingAddress.location = 'mamma';


    this.contract.personalData.surname = 'mamma';
    this.contract.personalData.name = 'mamma';
    this.contract.personalData.placeOfBirth = 'mamma';
    this.contract.personalData.dateOfBirth = 'mamma';
    this.contract.personalData.fiscalCode = 'mamma';
    this.contract.personalData.partitaIVA = 'mamma';
    this.contract.personalData.phoneNumber = 'mamma';
    this.contract.personalData.otherNumber = 'mamma';
    this.contract.personalData.email = 'mamma';
     this.contract.personalData.documentType = 'TYPE_LINCENSE';
    this.contract.personalData.documentNumber = 'mamma';
    this.contract.personalData.placeOfIssue = 'mamma';
     this.contract.personalData.dateOfIssue = 'mamma';
     this.contract.personalData.expiryDate = 'mamma';
    this.contract.personalData.address.address = 'mamma';
    this.contract.personalData.address.addressNumber = 'mamma';
    // this.contract.personalData.address.addressType = this.addressTypeKeys[0];
    this.contract.personalData.address.location = 'mamma';
    this.contract.personalData.address.zipCode = 'mamma';

  }

  openModalWithClass(modal: TemplateRef<any>) {
        this.modalRef = this.modalService.show(
          modal,
          Object.assign({}, { class: 'gray modal-lg' })
        );
      }




    onFileChanged(event: any) {
      event.preventDefault();
      for (let i = 0; i <= event.target.files.length - 1; i++) {
        const selectedFile = event.target.files[i];
        this.fileList.push(selectedFile);
        this.listOfFiles.push(selectedFile.name)
    }

    this.attachment.nativeElement.value = '';
  }

  upload() {
    event.preventDefault()
    this.progress = 0;

    // this.currentFile = this.selectedFiles.item(0);
    if(this.listOfFiles.length > 0)
    {

      this.listOfFiles.forEach(element => {
       this.adminService.uploadFile(element, 1).subscribe(
      (res) => {
        // if (event.type === HttpEventType.UploadProgress) {
        //   this.progress = Math.round(100 * event.loaded / event.total);
        // } else if (event instanceof HttpResponse) {
        //   this.message = event.body.message;
        //   // this.fileInfos = this.uploadService.getFiles();
        // }
      },
      err => {
        // this.progress = 0;
        // this.message = 'Could not upload the file!';
        // this.currentFile = undefined;
      });

    // this.selectedFiles = undefined;
    });
    }


  }






  removeSelectedFile(index) {
   // Delete the item from fileNames list
   this.listOfFiles.splice(index, 1);
   // delete file from FileList
   this.fileList.splice(index, 1);
  }

    onTabChange(event) {
      if (event.nextId === 'gestore' || event.nextId === 'contabili' && !this.formUnsubscriber) {
        setTimeout(() => {
          this.formUnsubscriber = this.contractInitForm.statusChanges.subscribe(
            validity => {
              switch (validity) {
                case 'VALID':
                  if (this._formValid) {
                    return;
                  }
                  this._formValid = true;
                  break;
                case 'INVALID':
                  if (!this._formValid) {
                    return;
                  }
                  this._formValid = false;
                  break;
              }
            }
          );
    }, 100);
  }
    }
}
