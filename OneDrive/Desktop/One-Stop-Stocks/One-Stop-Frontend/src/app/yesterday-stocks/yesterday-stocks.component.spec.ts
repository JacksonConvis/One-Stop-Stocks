import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesterdayStocksComponent } from './yesterday-stocks.component';

describe('YesterdayStocksComponent', () => {
  let component: YesterdayStocksComponent;
  let fixture: ComponentFixture<YesterdayStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YesterdayStocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YesterdayStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
