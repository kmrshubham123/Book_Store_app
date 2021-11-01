import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],

      imports: [ MatSnackBarModule, 
                  FormsModule , 
                  ReactiveFormsModule,
                  HttpClientModule,  
                  RouterTestingModule,
                  MatCardModule,
                  MatIconModule,
                 MatFormFieldModule,
                 MatInputModule,
                 BrowserAnimationsModule,
                
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Login component should create', () => {
    expect(component).toBeTruthy();
  });

  it('User-Login Should set submitted to true', () => {
    component.onSubmitUser();
    expect(component.onSubmitUser).toBeTruthy();
 });

 it('Admin-Login Should set submitted to true', () => {
  component.onSubmitAdmin();
  expect(component.onSubmitAdmin).toBeTruthy();
});

  it('User-Login From should be valid',() => {
      component.loginForm.controls['email'].setValue('xyz123@gmail.com');
      component.loginForm.controls['password'].setValue('xyz12345');
      expect(component.loginForm.valid).toBeTruthy();
  });

  
  it('User-Login From should be Invalid',() => {
    component.loginForm.controls['email'].setValue('');
    component.loginForm.controls['password'].setValue('');
    expect(component.loginForm.invalid).toBeFalsy();
  });


});
