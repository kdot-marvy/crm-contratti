import { Component, OnInit, EventEmitter, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { environment } from 'environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'app/admin/services/admin.service';

@Component({
    selector: 'elenco-user-cmp',
    templateUrl: 'elenco-user.component.html',
    styleUrls: ['./elenco-user.component.css']
})

export class ElencoUserComponent implements OnInit, AfterViewChecked{


  apiRoute = `${environment.apiUrl}` + '/api/users';

    // Defaults
    form!: FormGroup;
    users: any = [];
    searchTerm: string = '';
    reload: EventEmitter<boolean> = new EventEmitter();
    isLoadingUsers: boolean = false;
    recordsPerPage: number = 5;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
    private fb: FormBuilder, private cdr: ChangeDetectorRef
  ) { }

    ngOnInit(){
      this.buildForm();

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

    goToNew() {
      this.router.navigate(['nuovo-utente']);
    }

    deleteContract(contractId: any){
      this.adminService.deleteContract(contractId).subscribe(
        (response)=>{
          console.log(response);
        }
      );
    }
}
