import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/BookService/book-service.service';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  panelOpenState = false;
  cartArray:any=[]

  constructor(private bookService:BookServiceService, private dataService:DataService ) { }

  ngOnInit(): void {
    this.getcartlist()
    this.dataService.recevieData.subscribe((response:any)=>{
      console.log(response);
      this.getcartlist();
    })
  }



  getcartlist(){
    console.log("getwishlist");
    this.bookService.getCartService().subscribe((response:any)=>{
      this.cartArray=response['result']
      console.log("Getting wishList data ", this.cartArray);
      
    },error=>(
      console.log("getwishlist", error)
    ))
   
  }


  removeCart(data:any){
    console.log("removecartList");
    this.bookService.removeCartlistService(data).subscribe((response:any)=>{
      this.cartArray=response['result']
      this.dataService.sendData(response);
      
    },error=>(
      console.log("removecartList_Error", error)
    ))
    
  }
  
}
