import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotekaComponent } from './loteka.component';

describe('LotekaComponent', () => {
  let component: LotekaComponent;
  let fixture: ComponentFixture<LotekaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotekaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotekaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
