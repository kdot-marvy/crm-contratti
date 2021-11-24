import { AdminService } from 'app/admin/services/admin.service';
import { Component, OnInit,TemplateRef, OnDestroy, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Package } from 'app/admin/models/package.model';
import { Manager } from 'app/admin/models/manager.model';

@Component({
  selector: 'app-new-manager',
  templateUrl: './new-manager.component.html',
  styleUrls: ['./new-manager.component.css']
})
export class NewManagerComponent implements OnInit {

  modalRef: BsModalRef;

  package = new Package();
  manager = new Manager();
  newPackageName;

  private submitted = false;




  constructor(private modalService: BsModalService, private adminService: AdminService) { }

  ngOnInit(): void {
  }

  openModalWithClass(modal: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      modal,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  closeModal() {
    this.modalRef.hide()
  }

  addPackage(){
    if(this.newPackageName !== ''){
      const newPackage = new Package();
      newPackage.name = this.newPackageName;
      this.manager.packages.push(newPackage);
      this.newPackageName = '';
      this.closeModal();
    }
  }

  onSubmit(valid){
    this.submitted = true;
    if(valid){
      this.adminService.addManager(this.manager).subscribe(
        (res: any) => {
          this.adminService.showToast('S', 'gestore inserito con success');
        },(err) => {
          this.adminService.showToast('E', 'inserimento gestore non riuscito');

        });
    }
  }

  removeSelectedManager(index) {
    this.manager.packages.splice(index, 1);

  }

  changeToggle(enabled){
    if(enabled){
      this.manager.enabled = 1;
    }else{
      this.manager.enabled = 0;
    }
  }

}
