import { ComponentFixture, TestBed } from '@angular/core/testing';


import { HomepageComponent } from './homepage.component';
import{LoginComponent} from '../login/login.component'
import { SignupComponent } from '../signup/signup.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';



describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageComponent,
                      LoginComponent,
                      SignupComponent,
      ],
      imports:[ MatSnackBarModule,
                ReactiveFormsModule,
                HttpClientModule,
                RouterTestingModule,
                MatInputModule,
                BrowserAnimationsModule,
                MatCardModule,
                MatTabsModule,
                MatIconModule

      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
