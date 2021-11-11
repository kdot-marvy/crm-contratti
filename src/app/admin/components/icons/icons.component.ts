import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'icons.component.html',
    styleUrls: ['./icons.component.css']
})

export class IconsComponent{

    public modal: boolean = false;


    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ){}

    goToNew(){
        this.router.navigate(['signup'])
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
