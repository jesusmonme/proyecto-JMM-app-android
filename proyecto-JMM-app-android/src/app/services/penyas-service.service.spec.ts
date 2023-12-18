/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PenyasServiceService } from './penyas-service.service';

describe('Service: PenyasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PenyasServiceService]
    });
  });

  it('should ...', inject([PenyasServiceService], (service: PenyasServiceService) => {
    expect(service).toBeTruthy();
  }));
});
