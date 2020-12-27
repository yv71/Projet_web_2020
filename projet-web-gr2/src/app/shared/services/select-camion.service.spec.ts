import { TestBed } from '@angular/core/testing';

import { SelectCamionService } from './select-camion.service';

describe('SelectCamionService', () => {
  let service: SelectCamionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectCamionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
