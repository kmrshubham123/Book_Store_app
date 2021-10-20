import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/BookService/book-service.service';
import { DataService } from 'src/app/services/dataService/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
wishListArray:any=[];


  constructor(private bookService:BookServiceService,private dataService:DataService, private matSnackBar:MatSnackBar) { }

  ngOnInit(): void {
    
    this.getWishlist()
    this.dataService.recevieData.subscribe((response:any)=>{
        console.log(response);
        this.getWishlist();
      })
     
  }
 

  getWishlist(){
    console.log("getwishlist");
    this.bookService.getWishlistService().subscribe((response:any)=>{
      this.wishListArray=response['result']
      console.log("Getting wishList data ", this.wishListArray);
      
    },error=>(
      console.log("getwishlist", error)
    ))
   
  }

  DeleteWishList(data:any){
    console.log("DeleteWishList");
    this.bookService.deleteWishlistService(data).subscribe((response:any)=>{
      this.wishListArray=response['result']
      this.dataService.sendData(response);
      this.matSnackBar.open("remove successful ", ' ', {duration: 3000,});

    },error =>{
      console.log("Delete_wishList_error ",error);
      this.matSnackBar.open("Something went wrong ", ' ', {duration: 3000,});
    })
    
    
  }

}
