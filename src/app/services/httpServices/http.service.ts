import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BaseUrl=environment.BaseUrl
  constructor(private httpClient:HttpClient) { }

  postService(url: string= '' , payload: any, tokenRequired:boolean=false, httpOption:any=null){

    return this.httpClient.post(url,payload,tokenRequired && httpOption);

  }

  getService( url: string= '' , tokenRequired:boolean=false, httpOption:any){

    return this.httpClient.get(url,tokenRequired && httpOption);

  }
  deleteService(url:string='', payload: any,  tokenRequired:boolean=false, httpOption:any) {
    console.log(url);
    return this.httpClient.delete(url, tokenRequired && httpOption)
  }
  
  putService( url: string= '' ,payload: any, tokenRequired:boolean=false, httpOption:any){

    return this.httpClient.put(url,payload,tokenRequired && httpOption);

  }
  
  
}
