import { TestBed } from '@angular/core/testing';

import { SelectStructureService } from './select-structure.service';

describe('SelectStructureService', () => {
  let service: SelectStructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectStructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
