import { TestBed } from '@angular/core/testing';

import { AdicionarService } from './adicionar.service';

describe('AdicionarService', () => {
  let service: AdicionarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdicionarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
