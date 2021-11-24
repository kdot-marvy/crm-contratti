import { ContractModel } from 'app/admin/models/contract.model';
import { AuthenticationService } from 'app/shared/services/authentication.service';
import { AdminService } from './../../services/admin.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter, SimpleChange, Input, Output,  AfterViewChecked,
  ChangeDetectorRef,
  TemplateRef, } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagerService } from 'app/admin/services/pager.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'environments/environment';
import { param } from 'jquery';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-elenco-contract',
  templateUrl: './elenco-contract.component.html',
  styleUrls: ['./elenco-contract.component.css']
})
export class ElencoContractComponent implements OnInit,   AfterViewChecked {

  apiRoute = `${environment.apiUrl}` + '/api/contracts';
  modalRef: BsModalRef;


  // Defaults
  form!: FormGroup;
  contracts: any = [];
  searchTerm: string = '';
  reload: EventEmitter<boolean> = new EventEmitter();
  isLoadingContracts: boolean = false;
  recordsPerPage: number = 5;
  public modal: boolean = false;
  toDeleteId: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pagerService: PagerService,
    private http: HttpClient,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private adminService: AdminService,
    private modalService: BsModalService,
    private authenticationService: AuthenticationService
  ) {
   }



  // On init
  ngOnInit(): void {

    this.buildForm();
    this.getContracts()
  }
  goToNew() {
    this.router.navigate(['nuovo-contratto']);
  }

  getContracts(){
  }


  // On After view checked, detect changes manually
  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }


  // Init form
  buildForm() {
    this.form = this.fb.group({
      term: ['', [Validators.required]],
      recordsPerPage: [''],
    });
  }

  // On form submit => assign search term
  submitForm(): void {
    if (this.form.invalid) {
      return;
    }
    this.searchTerm = this.form.value.term;
  }

  // Clear search results on search box empty
  clearSearchResult() {
    if (this.form.controls.term.value === '' && this.searchTerm) {
      this.searchTerm = '';
      setTimeout(() => {
        this.reload.emit(true);
        this.reload.emit(false);
      }, 100);
    }
  }


  showModal(event: Event){
    event.preventDefault();
    this.modal=true;
  }


  exportExcel(){
    // this.adminService.exportExcel().subscribe(
    //   ( response) => {
    //     this.downloadFile(response);
    //   }
    // );
  }

  // downloadFile(data: Response) {
  //   const blob = new Blob([data], { type: 'application/octet-stream' });
  //   const url = window.URL.createObjectURL(blob);
  //   window.open(url);
  // }

  editContract(contract: any){
    this.router.navigate(['nuovo-contratto'], {queryParams: {id: contract.id}})
  }

  deleteContract(){
    this.closeModal();
    if(this.toDeleteId){
      this.adminService.deleteContract(this.toDeleteId).subscribe(
        (res) => {
          this.adminService.showToast('S','contratto eliminato con success');
            this.reload.emit(true);
            this.reload.emit(false);
          this.buildForm();
        },(err) => {
          this.adminService.showToast('E','eliminazione contratto non riuscita');

        }
      );
    }
  }

  openModalWithClass(event:Event, modal: TemplateRef<any>,contractId) {
    event.stopPropagation();
    this.toDeleteId = contractId;
        this.modalRef = this.modalService.show(
          modal,
          Object.assign({}, { class: 'gray modal-lg' })
        );
      }

      closeModal() {
        event.preventDefault();
        this.modalRef.hide()
      }

      goToDetails(event:Event,contract){
        event.preventDefault();
        this.router.navigate(['contratto'], {queryParams: {id: contract.id}})
      }



}
