import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { RatingstarComponent } from './ratingstar.component';

describe('RatingstarComponent', () => {
  let component: RatingstarComponent;
  let fixture: ComponentFixture<RatingstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingstarComponent ],
      imports:[ HttpClientModule,
                 MatSnackBarModule,
                 RouterTestingModule,

      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
