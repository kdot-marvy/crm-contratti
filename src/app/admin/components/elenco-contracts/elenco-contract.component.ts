import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AGENTE, CONTRACTS } from 'assets/data/contratti-mockup';
import { Agent } from 'http';

@Component({
  selector: 'app-elenco-contract',
  templateUrl: './elenco-contract.component.html',
  styleUrls: ['./elenco-contract.component.css']
})
export class ElencoContractComponent implements OnInit {

  public contracts = AGENTE;

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
