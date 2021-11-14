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
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.css']
})
export class NewContractComponent implements OnInit {


  private contract: ContractModel = new ContractModel();
  private submitted = false;
  public modal: boolean = false;
  private selectedContract;

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


  constructor(private route: ActivatedRoute, private adminService: AdminService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.addressTypeKeys = Object.keys(this.addressTypes);
    this.docTypeKeys = Object.keys(this.docTypes);
    this.EStatoSimKeys = Object.keys(this.EStatoSims);
    this.paymentTypeKeys = Object.keys(this.paymentTypes);
    this.EStatoPraticaTypeKeys = Object.keys(this.EStatoPraticaTypes);
    // this.route.queryParams.subscribe((param)=> {
    //   this.selectedContract = param;
    //   if(this.selectedContract != null){
    //     this.contractForm.controls['address'].setValue(this.selectedContract.id)
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
    });



  }

  submit() {
    console.log(this.contractForm);

  }

  getContract(id, detail: any) {
    this.adminService.updateContract(id,detail).subscribe(
      (contract: ContractModel) => this.editContract(contract),
      (err: any) => console.log(err)
    );
  }

  editContract(contract: ContractModel) {
    this.contractForm.patchValue({

      dati_anagrafici: {
        surname: contract.personalData.surname,
        name: contract.personalData.name,
        placeOfBirth: contract.personalData.placeOfBirth,
        dateOfBirth: contract.personalData.dateOfBirth,
        fiscalCode: contract.personalData.fiscalCode,
        partitaIVA: contract.personalData.partitaIVA,
        address: {
          addressType: contract.personalData.address.addressType,
          address: contract.personalData.address.address,
          addressNumber: contract.personalData.address.addressNumber,
          codicePostale: contract.personalData.address.zipCode,
          localita: contract.personalData.address.location,
        }

      }

      })
  }

  onSubmit(valid: boolean) {
    this.submitted = true;
    if (valid) {
      // this.modal = true;
      console.log(this.contractForm.value);

      this.adminService.addContract(JSON.stringify(this.contractForm.getRawValue())).subscribe(
        (res) => {
          console.log(res)
        }
      );
    } else {
      alert("compila tutti i campi");
    }
  }

  copyToPlant(event: Event) {
    event.preventDefault();

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



  contractForm = this.formBuilder.group(
    {


      dati_anagrafici: this.formBuilder.group({
        surname: ['', [Validators.required]],
        name: [''],
        placeOfBirth: ['', [Validators.required]],
        dateOfBirth: ['', [Validators.required]],
        fiscalCode: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
        partitaIVA: ['', [Validators.required]],
        address: this.formBuilder.group({
          addressType: ['', [Validators.required]],
          address: ['', [Validators.required]],
          addressNumber: ['', [Validators.required]],
          codicePostale: ['', [Validators.required]],
          localita: ['', [Validators.required]],
        }),
        phoneNumber: ['', [Validators.required]],
        otherNumber: [''],
        email: ['', [Validators.required, Validators.email]],
        documentType: ['', [Validators.required]],
        documentNumber: ['', [Validators.required]],
        placeOfIssue: ['', [Validators.required]],
        dateOfIssue: ['', [Validators.required]],
        expiryDate: ['', [Validators.required]],
      }),

      contract_manager_data: this.formBuilder.group({
        manager_id: ['', [Validators.required]],
        pack: ['', [Validators.required]],
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

        plant_location_address: this.formBuilder.group({
          plantAddressType: ['', [Validators.required]],
          plantAddress: ['', [Validators.required]],
          plantAddressNumber: ['', [Validators.required]],
          codicePostale: ['', [Validators.required]],
          localita: ['', [Validators.required]],
        }),

        shipping_address: this.formBuilder.group({
          shippingAddressType: ['', [Validators.required]],
          shippingAddress: ['', [Validators.required]],
          shippingAddressNumber: ['', [Validators.required]],
          codicePostale: ['', [Validators.required]],
          localita: ['', [Validators.required]],
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
  get codicePostale(): AbstractControl {
    return this.contractForm.get('codicePostale') as AbstractControl;
  }
  get localita(): AbstractControl {
    return this.contractForm.get('localita') as AbstractControl;
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
  // get codicePostale(): AbstractControl {
  //   return this.contractForm.get('codicePostale') as AbstractControl;
  // }
  // get localita(): AbstractControl {
  //   return this.contractForm.get('plantLocation') as AbstractControl;
  // }
  get shippingAddressType(): AbstractControl {
    return this.contractForm.get('shippingAddressType') as AbstractControl;
  }
  get shippingAddress(): AbstractControl {
    return this.contractForm.get('shippingAddress') as AbstractControl;
  }
  get shippingAddressNumber(): AbstractControl {
    return this.contractForm.get('shippingAddressNumber') as AbstractControl;
  }
  // get shippingZipCode(): AbstractControl {
  //   return this.contractForm.get('shippingZipCode') as AbstractControl;
  // }
  // get shippingLocation(): AbstractControl {
  //   return this.contractForm.get('shippingLocation') as AbstractControl;
  // }
}
