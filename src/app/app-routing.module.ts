import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AuthenticationguardGuard } from '../app/authenticationguard/authenticationguard.guard';
import { GetbooksComponent } from './component/getbooks/getbooks.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { CartComponent } from './component/cart/cart.component';


const routes: Routes = [
  {path:'signup' , component:SignupComponent},
  {path:'login' , component:LoginComponent},

  {path:'home' , component:HomepageComponent},
  {path:'',redirectTo:"home",pathMatch:'full'},

  {path:'header' , component:HeaderComponent},
  {path:'footer' , component:FooterComponent},
  {path:'forgot' , component:ForgotpasswordComponent},
 

  {path:'dashboard',component:DashboardComponent, canActivate:[AuthenticationguardGuard],
  children:[
    {path:'getbooks' , component:GetbooksComponent},
    {path:'wishlist' , component:WishlistComponent},
    {path:'cart' , component:CartComponent},
    
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
