import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [ MatSnackBarModule,
                ReactiveFormsModule,
                HttpClientModule,
                MatInputModule,
                BrowserAnimationsModule,
                MatCardModule

      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Signup Component should create', () => {
    expect(component).toBeTruthy();
  });


  it('Should set submitted to true', () => {
    component.onSubmit();
    expect(component.onSubmit).toBeTruthy();
 });

 it('From should be valid',() => {
  component.signUpForm.controls['fullName'].setValue('Kumar Shubham');
  component.signUpForm.controls['email'].setValue('xyz123@gmail.com');
  component.signUpForm.controls['password'].setValue('xyz12345');
  component.signUpForm.controls['mobileNo'].setValue('7894561230');
  expect(component.signUpForm.valid).toBeTruthy();
});

it('From should be Invalid',() => {
  component.signUpForm.controls['fullName'].setValue('');
  component.signUpForm.controls['email'].setValue('');
  component.signUpForm.controls['password'].setValue('');
  component.signUpForm.controls['mobileNo'].setValue('');
  expect(component.signUpForm.invalid).toBeFalsy();
});

});
