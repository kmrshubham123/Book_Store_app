import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpService } from '../httpServices/http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any
  BaseUrl=environment.BaseUrl
  
  constructor(private httpService:HttpService) { this.token = localStorage.getItem('token')}



  signUpUserService(requestdata:any){
    let httpAuthOptions={
      headers:new Headers({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.postService(this.BaseUrl + '/bookstore_user/registration',requestdata,false,httpAuthOptions)
  }

  loginUserService(requestdata:any){
    let httpAuthOptions={
      headers:new Headers({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.postService(this.BaseUrl + '/bookstore_user/login',requestdata,false,httpAuthOptions)
  }



}
