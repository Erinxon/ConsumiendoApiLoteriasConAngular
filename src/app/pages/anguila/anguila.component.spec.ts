import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnguilaComponent } from './anguila.component';

describe('AnguilaComponent', () => {
  let component: AnguilaComponent;
  let fixture: ComponentFixture<AnguilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnguilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnguilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
