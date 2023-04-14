import { TestBed } from '@angular/core/testing';

import { StockAPIService } from './stock-api.service';

describe('StockAPIService', () => {
  let service: StockAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
