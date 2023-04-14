import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastWeekComponent } from './last-week.component';

describe('LastWeekComponent', () => {
  let component: LastWeekComponent;
  let fixture: ComponentFixture<LastWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastWeekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
