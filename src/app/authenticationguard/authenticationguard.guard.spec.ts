import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthenticationguardGuard } from './authenticationguard.guard';

describe('AuthenticationguardGuard', () => {
  let guard: AuthenticationguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule

      ]
    });
    guard = TestBed.inject(AuthenticationguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
