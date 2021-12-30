import { jsDocComment } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasComponent } from './vagas.component';

describe('VagasComponent', () => {
  let component: VagasComponent;
  let fixture: ComponentFixture<VagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});