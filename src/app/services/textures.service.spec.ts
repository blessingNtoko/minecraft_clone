import { TestBed } from '@angular/core/testing';

import { TexturesService } from './textures.service';

describe('TexturesService', () => {
  let service: TexturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TexturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
