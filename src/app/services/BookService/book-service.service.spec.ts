import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BookServiceService } from './book-service.service';

describe('BookServiceService', () => {
  let service: BookServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule

      ]
    });
    service = TestBed.inject(BookServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
