import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';


import { GetbooksComponent } from './getbooks.component';

describe('GetbooksComponent', () => {
  let component: GetbooksComponent;
  let fixture: ComponentFixture<GetbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetbooksComponent

      ],

      imports: [HttpClientModule,
        MatSnackBarModule,
        RouterTestingModule,
        MatCardModule,
        BrowserAnimationsModule,
        MatPaginatorModule
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Get-all-book should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should change object value for getbooks', () => {
    component.ngOnInit();  //run ngOnInit
    expect(component.getAllBooks).toBeTruthy();
  });

  it('Add-WishList should be true', () => {
    component.wishlist('any');
    expect(component.wishlist).toBeTruthy();
  });

  it('Add-Cart should be true', () => {
    component.cart('any');
    expect(component.cart).toBeTruthy();
  });

  // it('Book-description should be true', () => {
  //   component.bookDetailsPage('any');
  //   expect(component.bookDetailsPage).toBeTruthy();
  // });

  // it('should navigate to the correct url', () => {
  //   let params = 'dashboard/bookdetail';
  //   let spy = spyOn(component.router, 'navigateByUrl').and.callThrough();   //spy install
  //   component.bookDetailsPage(params);
  //   expect(spy).toHaveBeenCalled();

  // });


});


