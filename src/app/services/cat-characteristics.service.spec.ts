import { TestBed } from '@angular/core/testing';

import { CatCharacteristicsService } from './cat-characteristics.service';

describe('CatCharacteristicsService', () => {
  let service: CatCharacteristicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatCharacteristicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
