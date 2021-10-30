import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoManagerComponent } from './elenco-manager.component';

describe('ElencoManagerComponent', () => {
  let component: ElencoManagerComponent;
  let fixture: ComponentFixture<ElencoManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElencoManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
