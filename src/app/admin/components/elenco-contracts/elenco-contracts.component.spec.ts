import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoContractsComponent } from './elenco-contracts.component';

describe('ElencoContractsComponent', () => {
  let component: ElencoContractsComponent;
  let fixture: ComponentFixture<ElencoContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElencoContractsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
