import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossasPessoasComponent } from './nossas-pessoas.component';

describe('NossasPessoasComponent', () => {
  let component: NossasPessoasComponent;
  let fixture: ComponentFixture<NossasPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NossasPessoasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NossasPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
