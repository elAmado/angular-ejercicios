import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioDetDetComponent } from './ejercicio-det-det.component';

describe('EjercicioDetDetComponent', () => {
  let component: EjercicioDetDetComponent;
  let fixture: ComponentFixture<EjercicioDetDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioDetDetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioDetDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
