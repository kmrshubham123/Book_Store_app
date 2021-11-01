import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/BookService/book-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/dataService/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admingetbooks',
  templateUrl: './admingetbooks.component.html',
  styleUrls: ['./admingetbooks.component.scss']
})
export class AdmingetbooksComponent implements OnInit {
  bookArray: any = [] 
  constructor(public bookService: BookServiceService , private matSnackBar:MatSnackBar,private dataService:DataService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.AdmingetBookService().subscribe((response: any) => {
      console.log(response); //get

      this.bookArray = response['result'] 
      // this.dataService.sendData(response);
      console.log("Books are", this.bookArray);

    }, error => {
      console.log(error);

    })
  }

}
