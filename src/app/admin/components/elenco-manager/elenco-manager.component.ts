import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-elenco-manager',
  templateUrl: './elenco-manager.component.html',
  styleUrls: ['./elenco-manager.component.css']
})
export class ElencoManagerComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToNew() {
    this.router.navigate(['nuovo-gestore']);
  }
}
