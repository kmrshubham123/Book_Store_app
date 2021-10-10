import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/BookService/book-service.service';


@Component({
  selector: 'app-getbooks',
  templateUrl: './getbooks.component.html',
  styleUrls: ['./getbooks.component.scss']
})
export class GetbooksComponent implements OnInit {
  bookArray: any = []  //store all data in array
  // bookName: any
  // author: any
  // quantity: any
  //  bookId: any
    token:any

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.getAllBooks();  //calling first time, and only one timt when browser rendering
   
  }

  getAllBooks() {
    this.bookService.getAllBookService().subscribe((response: any) => {
      console.log(response); //get

      this.bookArray = response['result'] 
      console.log("Books are", this.bookArray);

    }, error => {
      console.log(error);

    })
  }


  getRandomRating() {
    const rate = Math.max((Math.random() * 4) + 1);
    return rate.toFixed(1);
  }

  // getRandomRating(){
  //  return Math.floor(Math.random()*5)+1;
  // }

  wishlist(data:any) {
   
    console.log("wishlist data",data);

    
    this.bookService.addWishlistService(data).subscribe((response: any) => {
      console.log(response);


    },error =>{
      console.log(error);
      
    })
  }

  cart(data:any){
    console.log("cart data",data);

    this.bookService.addMyCartService(data).subscribe((response: any) => {
      console.log(response);


    },error =>{
      console.log(error);
      
    })

  }

}


