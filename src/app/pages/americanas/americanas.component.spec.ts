import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanasComponent } from './americanas.component';

describe('AmericanasComponent', () => {
  let component: AmericanasComponent;
  let fixture: ComponentFixture<AmericanasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmericanasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
