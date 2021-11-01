import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpService ,} from '../httpServices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  token:any
  BaseUrl=environment.BaseUrl

  constructor(private httpService:HttpService) { this.token = localStorage.getItem('token')}

  getAllBookService(){
    let httpAuthOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.getService(this.BaseUrl + '/bookstore_user/get/book' ,false,httpAuthOptions)
  }

  addWishlistService(data: any) {
    this.token = localStorage.getItem('token');
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService(this.BaseUrl+'/bookstore_user/add_wish_list/'+data._id,{},true, httpAuthOptions);
  }
 
  getWishlistService() {
    this.token = localStorage.getItem('token');
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.getService(this.BaseUrl+'/bookstore_user/get_wishlist_items',true, httpAuthOptions);
  }

  deleteWishlistService(data:any) {
    this.token = localStorage.getItem('token');
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.deleteService(this.BaseUrl+'/bookstore_user/remove_wishlist_item/'+data.product_id._id,{},true, httpAuthOptions);
  }

  addMyCartService(data:any){
    console.log("Cart data",data);
    let httpAuthOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'x-access-token':this.token

      })
    }
    return this.httpService.postService(this.BaseUrl +'/bookstore_user/add_cart_item/'+ data._id, {},true,httpAuthOptions);
  }

  getCartService() {
    this.token = localStorage.getItem('token');
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.getService(this.BaseUrl+'/bookstore_user/get_cart_items',true, httpAuthOptions);
  }

  removeCartlistService(data:any) {
    this.token = localStorage.getItem('token');
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.deleteService(this.BaseUrl+'/bookstore_user/remove_cart_item/'+data._id,{},true, httpAuthOptions);
  }

  customerDetailService(data:any){
    this.token = localStorage.getItem('token');
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.putService(this.BaseUrl+'/bookstore_user/edit_user',data,true, httpAuthOptions);
  }

  bookcheckoutService(data: any) {
    this.token = localStorage.getItem('token');
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService(this.BaseUrl+'/bookstore_user/add/order',data,true, httpAuthOptions);
  }



 
  FeedbackService(review: any,data:any) {
    this.token = localStorage.getItem('token');
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService(this.BaseUrl+'/bookstore_user/add/feedback/'+data,review,true,httpAuthOptions);
  }


GetFeedbackService(id:any){

    let httpAuthOptions = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    console.log(httpAuthOptions); 
    
    return this.httpService.getService(this.BaseUrl+'/bookstore_user/get/feedback/'+id,true,httpAuthOptions);

  }

  AdmingetBookService(){
    let httpAuthOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.getService(this.BaseUrl + '/bookstore_user/get/book' ,false,httpAuthOptions)
  }

}
  

