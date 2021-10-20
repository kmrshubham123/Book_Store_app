import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpService } from '../httpServices/http.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any
  BaseUrl=environment.BaseUrl
  
  constructor(private httpService:HttpService ) { 
    this.token = localStorage.getItem('token')
  }



  signUpUserService(requestdata:any){
    let httpAuthOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.postService(this.BaseUrl + '/bookstore_user/registration',requestdata,false,httpAuthOptions)
  }

  loginUserService(requestdata:any){
    let httpAuthOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.postService(this.BaseUrl + '/bookstore_user/login',requestdata,false,httpAuthOptions)
  }

  


  //  <----------------Admin Service-----------------------------------.>




  AdminRegistrationService(requestdata:any){
    let httpAuthOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.postService(this.BaseUrl + '/bookstore_user/admin/registration',requestdata,false,httpAuthOptions)
  }

  AdminloginService(requestdata:any){
    let httpAuthOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.postService(this.BaseUrl + '/bookstore_user/admin/login',requestdata,false,httpAuthOptions)
  }
}
