import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataService/data.service';
import { BookServiceService } from 'src/app/services/BookService/book-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
// import bookdetails from '../../jsonfile/bookdetails.json'

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss']
})
export class BookdetailComponent implements OnInit {

  bookArray:any
  booksdata:any 
 

  constructor(private dataService:DataService,private bookService:BookServiceService, private router:Router,
              private SnackBar:MatSnackBar ) {
    this.booksdata = this.router.getCurrentNavigation()?.extras.state
    console.log(this.booksdata)
   }
   

  ngOnInit(){
    this.getData()
  }
  
  getData=() =>{
    try{
      this.booksdata = this.booksdata['details'];

      localStorage.setItem("id",this.booksdata.id);
    
    console.log(this.booksdata);
    }
    
    catch(Error:any){
      console.log(Error.Message)
    }
   
    
  }

  getParticularBook(){
    this.bookService.getAllBookService().subscribe((response:any)=>{
      console.log(response)
      this.bookArray=response.result
      console.log(this.bookArray);
      
    })
  }

}
