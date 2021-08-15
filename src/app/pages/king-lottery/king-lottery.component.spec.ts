import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingLotteryComponent } from './king-lottery.component';

describe('KingLotteryComponent', () => {
  let component: KingLotteryComponent;
  let fixture: ComponentFixture<KingLotteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingLotteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
