import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';


import { GetbooksComponent } from './getbooks.component';

describe('GetbooksComponent', () => {
  let component: GetbooksComponent;
  let fixture: ComponentFixture<GetbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetbooksComponent
                     
      ],

      imports:[ HttpClientModule,
                MatSnackBarModule,
                RouterTestingModule
                

      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
