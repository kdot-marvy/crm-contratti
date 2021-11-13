import { AdminService } from './../../services/admin.service';
import { Component, OnInit, EventEmitter, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-elenco-manager',
  templateUrl: './elenco-manager.component.html',
  styleUrls: ['./elenco-manager.component.css']
})
export class ElencoManagerComponent implements OnInit, AfterViewChecked {

  apiRoute = `${environment.apiUrl}` + '/api/managers';

    // Defaults
    form!: FormGroup;
    managers: any = [];
    searchTerm: string = '';
    reload: EventEmitter<boolean> = new EventEmitter();
    isLoadingManagers: boolean = false;
    recordsPerPage: number = 5;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
    private fb: FormBuilder, private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.buildForm();

    // this.adminService.getAllManagers().subscribe(
    //   (managers) => {

    //   }
    // );
  }

  goToNew() {
    this.router.navigate(['nuovo-gestore']);
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
}
