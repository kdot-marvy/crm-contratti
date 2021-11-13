import { AuthenticationService } from 'app/shared/services/authentication.service';
import { AdminService } from './../../services/admin.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter, SimpleChange, Input, Output,  AfterViewChecked,
  ChangeDetectorRef, } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagerService } from 'app/admin/services/pager.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'environments/environment';


@Component({
  selector: 'app-elenco-contract',
  templateUrl: './elenco-contract.component.html',
  styleUrls: ['./elenco-contract.component.css']
})
export class ElencoContractComponent implements OnInit,   AfterViewChecked {

  apiRoute = `${environment.apiUrl}` + '/api/contracts';


  // Defaults
  form!: FormGroup;
  contracts: any = [];
  searchTerm: string = '';
  reload: EventEmitter<boolean> = new EventEmitter();
  isLoadingContracts: boolean = false;
  recordsPerPage: number = 5;
  public modal: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pagerService: PagerService,
    private http: HttpClient,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private adminService: AdminService,
  ) { }



  // On init
  ngOnInit(): void {
    this.buildForm();
    this.adminService.getAllContracts().subscribe((contratti) =>{

    });
  }
  goToNew() {
    this.router.navigate(['nuovo-contratto']);
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

  closeModal(event: Event){
    event.preventDefault();
    this.modal = false;
  }



}
