import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-elenco-contract',
  templateUrl: './elenco-contract.component.html',
  styleUrls: ['./elenco-contract.component.css']
})
export class ElencoContractComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToNew() {
    this.router.navigate(['nuovo-contratto']);
  }

}
