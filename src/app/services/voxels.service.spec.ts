import { TestBed } from '@angular/core/testing';

import { VoxelsService } from './voxels.service';

describe('VoxelsService', () => {
  let service: VoxelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoxelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
