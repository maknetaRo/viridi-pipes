import { TestBed } from '@angular/core/testing';

import { ViridiPipesService } from './viridi-pipes.service';

describe('ViridiPipesService', () => {
  let service: ViridiPipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViridiPipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
