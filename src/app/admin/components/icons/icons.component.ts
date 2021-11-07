import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'icons.component.html',
    styleUrls: ['./icons.component.css']
})

export class IconsComponent{

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ){}

    goToNew(){
        this.router.navigate(['signup'])
    }
}
