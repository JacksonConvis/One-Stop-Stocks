import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfStocksComponent } from './list-of-stocks.component';

describe('ListOfStocksComponent', () => {
  let component: ListOfStocksComponent;
  let fixture: ComponentFixture<ListOfStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfStocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
