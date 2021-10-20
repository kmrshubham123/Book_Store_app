import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import { HomepageComponent } from './component/homepage/homepage.component';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { AuthguardserviceService } from './services/AuthguardService/authguardservice.service';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetbooksComponent } from './component/getbooks/getbooks.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { CartComponent } from './component/cart/cart.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { OrderplacedComponent } from './component/orderplaced/orderplaced.component';
import { BookdetailComponent } from './component/bookdetail/bookdetail.component';
import { RatingstarComponent } from './component/ratingstar/ratingstar.component';
import { AdmindashboardComponent } from './component/admindashboard/admindashboard.component';
import { AdminregistrationComponent } from './component/adminregistration/adminregistration.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './component/adminhome/adminhome.component';









@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    GetbooksComponent,
    WishlistComponent,
    CartComponent,
    OrderplacedComponent,
    BookdetailComponent,
    RatingstarComponent,
    AdmindashboardComponent,
    AdminregistrationComponent,
    AdminloginComponent,
    AdminhomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
  
    MatIconModule,
    FlexLayoutModule,
    HttpClientModule,MatSnackBarModule,FormsModule,ReactiveFormsModule,MatCardModule,
    MatTabsModule,MatDividerModule,MatButtonModule,MatToolbarModule,MatTooltipModule,
    MatExpansionModule,MatMenuModule,MatOptionModule,
    MatFormFieldModule,MatSelectModule

   
  ],
  providers: [
    AuthguardserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
