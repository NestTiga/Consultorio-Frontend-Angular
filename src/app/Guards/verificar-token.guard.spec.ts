import { TestBed } from '@angular/core/testing';

import { VerificarTokenGuard } from './verificar-token.guard';

describe('VerificarTokenGuard', () => {
  let guard: VerificarTokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerificarTokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
