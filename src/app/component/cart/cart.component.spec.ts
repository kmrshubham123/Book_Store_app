import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports:[ HttpClientModule,
                MatSnackBarModule,
                ReactiveFormsModule,
                RouterTestingModule,
                MatCardModule,
                MatIconModule,
                MatExpansionModule,
                BrowserAnimationsModule,

      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Cart component should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should change object value for cartList' , ()=>{
    component.ngOnInit();  //run ngOnInit
    expect(component.getcartlist).toBeTruthy();
  });

  it('Customer-Details From should be valid', () => {
    component.CustomerForm.controls['fullName'].setValue('Kumar Shubham');
    component.CustomerForm.controls['mobileNo'].setValue('7894561230');
    component.CustomerForm.controls['addressType'].setValue('Home');
    component.CustomerForm.controls['fullAddress'].setValue('NaiSaraiBihar');
    component.CustomerForm.controls['city'].setValue('BiharSharif');
    component.CustomerForm.controls['state'].setValue('Bihar');
    expect(component.CustomerForm.valid).toBeTruthy();
  });

  it('Customer-Details From should be Invalid', () => {
    component.CustomerForm.controls['fullName'].setValue('');
    component.CustomerForm.controls['mobileNo'].setValue('');
    component.CustomerForm.controls['addressType'].setValue('');
    component.CustomerForm.controls['fullAddress'].setValue('');
    component.CustomerForm.controls['city'].setValue('');
    component.CustomerForm.controls['state'].setValue('');
    expect(component.CustomerForm.valid).toBeFalsy();
  });

  it('Customer-Details Should set submitted to true', () => {
    component.onSubmit();
    expect(component.onSubmit).toBeTruthy();
  });

  it('Cart-item Should remove to true', () => {
    component.removeCart('any');
    expect(component.removeCart).toBeTruthy();
  });
  
  it('cart-item should be placed to true', ()=>{
    component.checkout();
    expect(component.checkout).toBeTruthy();
  
  })
});
