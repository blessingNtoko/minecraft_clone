import { TestBed } from '@angular/core/testing';

import { VoxelsToolService } from './voxels-tool.service';

describe('VoxelsToolService', () => {
  let service: VoxelsToolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoxelsToolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
