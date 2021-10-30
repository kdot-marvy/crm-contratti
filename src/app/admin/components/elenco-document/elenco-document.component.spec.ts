import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoDocumentComponent } from './elenco-document.component';

describe('ElencoDocumentComponent', () => {
  let component: ElencoDocumentComponent;
  let fixture: ComponentFixture<ElencoDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElencoDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
