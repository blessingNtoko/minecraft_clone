import { TestBed } from '@angular/core/testing';

import { VoxelsShaderService } from './voxels-shader.service';

describe('VoxelsShaderService', () => {
  let service: VoxelsShaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoxelsShaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
