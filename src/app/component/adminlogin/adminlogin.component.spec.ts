import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AdminloginComponent } from './adminlogin.component';

describe('AdminloginComponent', () => {
  let component: AdminloginComponent;
  let fixture: ComponentFixture<AdminloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminloginComponent ],
      imports:[ MatSnackBarModule,
                ReactiveFormsModule,
                HttpClientModule,

      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Admin Login should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should set submitted to true', () => {
    component.onSubmit();
    expect(component.onSubmit).toBeTruthy();
 });

  it('Admin-Login From should be valid',() => {
      component.AdminloginForm.controls['email'].setValue('xyz123@gmail.com');
      component.AdminloginForm.controls['password'].setValue('xyz12345');
      expect(component.AdminloginForm.valid).toBeTruthy();
  });

  
  it('Admin-Login From should be Invalid',() => {
    component.AdminloginForm.controls['email'].setValue('');
    component.AdminloginForm.controls['password'].setValue('');
    expect(component.AdminloginForm.valid).toBeFalsy();
  });
});
