import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BaseUrl=environment.BaseUrl
  constructor(private httpClient:HttpClient) { }

  postService(url: string= '' , payload: any, tokenRequired:boolean=false, httpOption:any){

    return this.httpClient.post(url,payload,tokenRequired && httpOption);

  }

  // getService(){

  // }
  
}
