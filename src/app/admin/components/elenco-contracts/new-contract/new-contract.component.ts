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

import CodiceFiscale from 'codice-fiscale-js'
import { ValidatorCodiceFiscale } from 'app/admin/directives/codiceFiscale.validator';



@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.css']
})
export class NewContractComponent implements OnInit, OnDestroy {


  tabs: string[] = ['Dati Anagrafici','Dati Gestore','Dati Contabili','Allegati'];
  selectedTab = this.tabs[0];

  coinwallet: string[] = ['wallet1','wallet2'];
  selectedwallet = this.coinwallet[0];

  managerObject: any;

  private contract: ContractModel = new ContractModel();
  private submitted = false;
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

  placeOfBirthModel = '';
  dateOfBirthModel = '';




  edit=false;

  @ViewChild('contractForm', { static: true }) contractInitForm;

  @ViewChild('attachments') attachment: any;

  @ViewChild('modal')
  private modal: TemplateRef<any>;

  options = {
    componentRestrictins : {
      country: ['IT']
    }
  }

  fileList: File[] = [];
  listOfFiles: any[] = [];

  routerUnsubscriber : Subscription;

  formUnsubscriber : Subscription;


  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  previews: string[] = [];
  imageInfos?: Observable<any>;

  contractForm: FormGroup = this.formBuilder.group(
      {
        dati_anagrafici: this.formBuilder.group({
          surname: ['kenny', [Validators.required]],
          name: ['kdot'],
          placeOfBirth: ['mando', [Validators.required]],
          dateOfBirth: ['', [Validators.required]],
          fiscalCode: ['KYEMMM80A01H612V', [Validators.required]],
          partitaIVA: ['KYEMMM80A01H612V', [Validators.required]],
          address: this.formBuilder.group({
            addressType: ['', [Validators.required]],
            address: ['santa maria ', [Validators.required]],
            addressNumber: ['5', [Validators.required]],
            codicePostale: ['45678', [Validators.required]],
            localita: ['mambo', [Validators.required]],
          }),
          phoneNumber: ['4566754334', [Validators.required]],
          otherNumber: ['4534534534'],
          email: ['mamma@mamma.com', [Validators.required, Validators.email]],
          documentType: ['', [Validators.required]],
          documentNumber: ['dfgdfg', [Validators.required]],
          placeOfIssue: ['fgdfg', [Validators.required]],
          dateOfIssue: ['', [Validators.required]],
          expiryDate: ['', [Validators.required]],
        }),

        contract_manager_data: this.formBuilder.group({
          manager_id: ['', [Validators.required]],
          pack: [''],
          coverage: ['ghfh'],
          additionalOptions: ['hgfhfg'],
          portability: ['gfhfgh'],
          portabilityNumber: ['fghfghf'],
          vodafoneStationSerial: ['fghfgh'],
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

          plant_location_address: this.formBuilder.group({
            addressType: ['', [Validators.required]],
            address: ['sadfsd', [Validators.required]],
            addressNumber: ['5', [Validators.required]],
            codicePostale: ['3435', [Validators.required]],
            localita: ['sfsdfs', [Validators.required]],
          }),

          shipping_address: this.formBuilder.group({
            addressType: ['', [Validators.required]],
            address: ['sdfaasdf', [Validators.required]],
            addressNumber: ['5', [Validators.required]],
            codicePostale: ['34543543', [Validators.required]],
            localita: ['sdfgdfs', [Validators.required]],
          }),

          note: ['dfsdfsfsdfs'],
        }),

        accountingData: this.formBuilder.group({
          fileStatus: ['', [Validators.required]],
          paymentType: ['',  [Validators.required]],
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

  constructor(private modalService: BsModalService,private route: ActivatedRoute, private adminService: AdminService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.edit = false;


     this.addressTypeKeys = Object.keys(this.addressTypes);
     this.docTypeKeys = Object.keys(this.docTypes);
     this.EStatoSimKeys = Object.keys(this.EStatoSims);
     this.paymentTypeKeys = Object.keys(this.paymentTypes);
     this.EStatoPraticaTypeKeys = Object.keys(this.EStatoPraticaTypes);

    this.routerUnsubscriber = this.route.queryParams.subscribe((param) => {
      if(param.id != null && param.id !== ''){
        this.edit = true;
        this.adminService.getContract(param.id).subscribe(
          (contract: any) =>{
            this.selectedContract = contract;
            this.contractForm.patchValue(contract);
          }
        );
        console.log(this.contract);
      }
    })


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



  onSubmit() {
    this.submitted = true;
    console.log(this.contractForm.value);

    // this.closeModal();

     if (this.contractForm.valid) {
      this.openModalWithClass();
     }
  }

  registerContract(){

    if(this.manager){
      this.manager.setValue(this.manager.value.id);
      }

      this.adminService.addContract(this.contractForm.getRawValue()).subscribe(
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

  onEdit(){

    if(this.manager){
      this.manager.setValue(this.manager.value.id);
      }

    this.adminService.updateContract(this.selectedContract.id,this.contractForm).subscribe(
      (res:any) => {
        this.adminService.showToast('S', 'contratto inserito con success');
        this.contract = new ContractModel();
        this.savedContractId = res.id;
        if( this.savedContractId){
          this.upload();
        }
      },(err) => {
        this.adminService.showToast('E', 'inserimento contratto non riuscito');

      })

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



  openModalWithClass() {
        this.modalRef = this.modalService.show(
          this.modal,
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


  calcolaCodiceFiscale(){
    const isValid = CodiceFiscale.check(this.fiscalCode.value);
    console.log(isValid);
    if(isValid){
      const personData = CodiceFiscale.computeInverse(this.fiscalCode.value);
      console.log(personData.year,personData.day,personData.month,personData.birthplace);
    }
  }

  public handleAddressChange(address) {
    console.log(address);
    this.localita.setValue(address.vicinity ? address.vicinity : '');
    this.zipCode.setValue(address.postalCode ? address.vicinity : '');
    this.addressNumber.setValue(address.streetName ? address.vicinity : '');

}

  removeSelectedFile(index) {
   // Delete the item from fileNames list
   this.listOfFiles.splice(index, 1);
   // delete file from FileList
   this.fileList.splice(index, 1);
  }

    get surname(): AbstractControl {
    return this.contractForm.get('dati_anagrafici.surname') as AbstractControl;
  }

  get name(): AbstractControl {
    return this.contractForm.get('dati_anagrafici.name') as AbstractControl;
  }

  get placeOfBirth(): AbstractControl {
    return this.contractForm.get('dati_anagrafici.placeOfBirth') as AbstractControl;
  }
  get dateOfBirth(): AbstractControl {
    return this.contractForm.get('dati_anagrafici.dateOfBirth') as AbstractControl;
  }
  get fiscalCode(): AbstractControl {
    return this.contractForm.get('dati_anagrafici.fiscalCode') as AbstractControl;
  }
  get partitaIVA(): AbstractControl {
    return this.contractForm.get('dati_anagrafici.partitaIVA') as AbstractControl;
  }
  get addressType(): AbstractControl {
    return this.contractForm.get('dati_anagrafici.address.addressType') as AbstractControl;
  }
  get address(): AbstractControl {
    return this.contractForm.get('dati_anagrafici.address.address') as AbstractControl;
  }
  get addressNumber(): AbstractControl {
    return this.contractForm.get('dati_anagrafici.address.addressNumber') as AbstractControl;
  }
  get zipCode(): AbstractControl {
    return this.contractForm.get('dati_anagrafici.address.codicePostale') as AbstractControl;
  }
  get localita(): AbstractControl {
    return this.contractForm.get('dati_anagrafici.address.localita') as AbstractControl;
  }


  get phoneNumber(): AbstractControl {
    return this.contractForm.get('dati_anagrafici.phoneNumber') as AbstractControl;
  }
  get email(): AbstractControl {
    return this.contractForm.get('dati_anagrafici.email') as AbstractControl;
  }
  get documentType(): AbstractControl {
    return this.contractForm.get('dati_anagrafici.documentType') as AbstractControl;
  }
  get documentNumber(): AbstractControl {
    return this.contractForm.get('dati_anagrafici.documentNumber') as AbstractControl;
  }
  get placeOfIssue(): AbstractControl {
    return this.contractForm.get('dati_anagrafici.placeOfIssue') as AbstractControl;
  }
  get dateOfIssue(): AbstractControl {
    return this.contractForm.get('dati_anagrafici.dateOfIssue') as AbstractControl;
  }
  get expiryDate(): AbstractControl {
    return this.contractForm.get('dati_anagrafici.expiryDate') as AbstractControl;
  }


  get manager(): AbstractControl {
    return this.contractForm.get('contract_manager_data.manager_id') as AbstractControl;
  }
  get package(): AbstractControl {
    return this.contractForm.get('dati_anagrafici.pack') as AbstractControl;
  }


  get plantAddressType(): AbstractControl {
    return this.contractForm.get('contract_manager_data.plant_location_address.addressType') as AbstractControl;
  }
  get plantAddress(): AbstractControl {
    return this.contractForm.get('contract_manager_data.plant_location_address.address') as AbstractControl;
  }
  get plantAddressNumber(): AbstractControl {
    return this.contractForm.get('contract_manager_data.plant_location_address.addressNumber') as AbstractControl;
  }
  get plantAddresscodicePostale(): AbstractControl {
    return this.contractForm.get('contract_manager_data.plant_location_address.codicePostale') as AbstractControl;
  }
  get plantAddresslocalita(): AbstractControl {
    return this.contractForm.get('contract_manager_data.plant_location_address.localita') as AbstractControl;
  }

  get shippingAddressType(): AbstractControl {
    return this.contractForm.get('contract_manager_data.shipping_address.addressType') as AbstractControl;
  }
  get shippingAddress(): AbstractControl {
    return this.contractForm.get('contract_manager_data.shipping_address.address') as AbstractControl;
  }
  get shippingAddressNumber(): AbstractControl {
    return this.contractForm.get('contract_manager_data.shipping_address.addressNumber') as AbstractControl;
  }
  get shippingZipCode(): AbstractControl {
    return this.contractForm.get('contract_manager_data.shipping_address.codicePostale') as AbstractControl;
  }
  get shippingLocation(): AbstractControl {
    return this.contractForm.get('contract_manager_data.shipping_address.localita') as AbstractControl;
  }

  get fileStatus(): AbstractControl {
    return this.contractForm.get('accountingData.fileStatus') as AbstractControl;
  }

  get paymentType(): AbstractControl {
    return this.contractForm.get('accountingData.paymentType') as AbstractControl;
  }

}
