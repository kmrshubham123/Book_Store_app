import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminregistrationComponent } from './adminregistration.component';

describe('AdminregistrationComponent', () => {
  let component: AdminregistrationComponent;
  let fixture: ComponentFixture<AdminregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminregistrationComponent],
      imports: [MatSnackBarModule,
        ReactiveFormsModule,
        HttpClientModule, MatInputModule,
        BrowserAnimationsModule, MatCardModule,
        MatIconModule
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Admin-SignUp should create', () => {
    expect(component).toBeTruthy();
  });

  it('Admin-SignUp Should set submitted to true', () => {
    component.onSubmit();
    expect(component.onSubmit).toBeTruthy();
  });

  it('Admin-SignUp From should be valid', () => {
    component.registrationForm.controls['fullName'].setValue('Kumar Shubham');
    component.registrationForm.controls['email'].setValue('xyz123@gmail.com');
    component.registrationForm.controls['password'].setValue('xyz12345');
    component.registrationForm.controls['phone'].setValue('7894561230');
    expect(component.registrationForm.valid).toBeTruthy();
  });

  it('Admin-SignUp From should be Invalid', () => {
    component.registrationForm.controls['fullName'].setValue('');
    component.registrationForm.controls['email'].setValue('');
    component.registrationForm.controls['password'].setValue('');
    component.registrationForm.controls['phone'].setValue('');
    expect(component.registrationForm.valid).toBeFalsy();
  });

});
