import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotedomComponent } from './lotedom.component';

describe('LotedomComponent', () => {
  let component: LotedomComponent;
  let fixture: ComponentFixture<LotedomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotedomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotedomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
