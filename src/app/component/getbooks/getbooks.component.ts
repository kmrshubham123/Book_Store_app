import { Component, OnInit,Input } from '@angular/core';
import { BookServiceService } from 'src/app/services/BookService/book-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/dataService/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getbooks',
  templateUrl: './getbooks.component.html',
  styleUrls: ['./getbooks.component.scss']
})
export class GetbooksComponent implements OnInit {
  bookArray: any = []  //store all data in array

    token:any
    id:any   //for particular id of getallbook item(book_detail_page)

    // @Input() bookcard:any

  constructor(private bookService: BookServiceService , private matSnackBar:MatSnackBar,private dataService:DataService,
              private router:Router) { }

  ngOnInit(): void {
    this.getAllBooks();  //calling first time, and only one timt when browser rendering
   
  }

  getAllBooks() {
    this.bookService.getAllBookService().subscribe((response: any) => {
      console.log(response); //get

      this.bookArray = response['result'] 
      // this.dataService.sendData(response);
      console.log("Books are", this.bookArray);

    }, error => {
      console.log(error);

    })
  }

  //click on getbooks , render on bookdetails page
  bookDetailsPage(data:any){
    this.id = data._id;
    console.log("book-id" ,this.id);
    this.router.navigateByUrl('dashboard/bookdetail' , { state: { details: data,id: data._id } })
   
  }



  getRandomRating() {
    const rate = Math.max((Math.random() * 4) + 1);
    return rate.toFixed(1);
  }



  wishlist(data:any) {
   
    console.log("wishlist data",data);
    
    this.bookService.addWishlistService(data).subscribe((response: any) => {
      console.log(response);
      this.matSnackBar.open("Added in wishlist ", ' ', {duration: 3000,});

    },error =>{
      console.log(error);
      this.matSnackBar.open("Something went wrong ", ' ', {duration: 3000,});
    })
  }

  cart(data:any){
    console.log("cart data",data);

    this.bookService.addMyCartService(data).subscribe((response: any) => {
      console.log(response);
      this.matSnackBar.open("Added in cart ", ' ', {duration: 3000,});

    },error =>{
      console.log(error);
      this.matSnackBar.open("Something went wrong ", ' ', {duration: 3000,});
    })
   
  }

}


