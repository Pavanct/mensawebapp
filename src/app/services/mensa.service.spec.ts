import { TestBed } from '@angular/core/testing';

import { MensaService } from './mensa.service';

describe('MensaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MensaService = TestBed.get(MensaService);
    expect(service).toBeTruthy();
  });
});
