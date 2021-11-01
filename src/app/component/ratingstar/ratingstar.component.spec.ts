import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
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
                 FormsModule,
                 MatInputModule,
                 ReactiveFormsModule

      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Star-rating should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('ngOnInit should change object value for Feedback', () => {
    component.ngOnInit();  //run ngOnInit
    expect(component.getFeedback).toBeTruthy();
  }); 

  it('User-feedback should be true', () => {
    component.feedback();
    expect(component.feedback).toBeTruthy();
  });

});
