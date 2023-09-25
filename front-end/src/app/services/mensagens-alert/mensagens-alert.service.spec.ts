import { TestBed } from '@angular/core/testing';

import { MensagensAlertService } from './mensagens-alert.service';

describe('MensagensAlertService', () => {
  let service: MensagensAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensagensAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
