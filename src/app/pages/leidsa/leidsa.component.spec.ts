import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeidsaComponent } from './leidsa.component';

describe('LeidsaComponent', () => {
  let component: LeidsaComponent;
  let fixture: ComponentFixture<LeidsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeidsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeidsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
