import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaSuerteComponent } from './la-suerte.component';

describe('LaSuerteComponent', () => {
  let component: LaSuerteComponent;
  let fixture: ComponentFixture<LaSuerteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaSuerteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaSuerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
