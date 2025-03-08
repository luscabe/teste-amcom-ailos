/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CpfService } from './cpf.service';

describe('Service: Cpf', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CpfService]
    });
  });

  it('should ...', inject([CpfService], (service: CpfService) => {
    expect(service).toBeTruthy();
  }));
});
