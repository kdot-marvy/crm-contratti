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
    if(this.package.name !== ''){
      this.manager.packages.push(this.package);
    }
  }

  save(valid){
    if(valid){
      this.adminService.addManager(this.manager);
    }
  }

}
