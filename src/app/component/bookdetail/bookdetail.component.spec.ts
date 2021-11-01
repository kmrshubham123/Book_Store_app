import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { RatingstarComponent } from '../ratingstar/ratingstar.component';

import { BookdetailComponent } from './bookdetail.component';

describe('BookdetailComponent', () => {
  let component: BookdetailComponent;
  let fixture: ComponentFixture<BookdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookdetailComponent,
                      RatingstarComponent
      
      ],
      imports:[ HttpClientModule,
                RouterTestingModule,
                MatSnackBarModule,
            

      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Book-details component should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should change object value for book-detail Data', () => {
    component.ngOnInit();  //run ngOnInit
    expect(component.getData).toBeTruthy();
  });

  it('Particular book should be true', () => {
    component.getParticularBook();
    expect(component.getParticularBook).toBeTruthy();
  });

});
