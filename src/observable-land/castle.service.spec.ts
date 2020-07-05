import { TestBed } from '@angular/core/testing';

import { CastleService } from './castle.service';

describe('CastleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CastleService = TestBed.get(CastleService);
    expect(service).toBeTruthy();
  });
});
