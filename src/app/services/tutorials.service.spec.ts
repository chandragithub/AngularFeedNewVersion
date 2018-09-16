import { TestBed, inject } from '@angular/core/testing';

import { TutorialsService } from './tutorials.service';

describe('TutorialsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TutorialsService]
    });
  });

  it('should be created', inject([TutorialsService], (service: TutorialsService) => {
    expect(service).toBeTruthy();
  }));
});
