import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/BookService/book-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-ratingstar',
  templateUrl: './ratingstar.component.html',
  styleUrls: ['./ratingstar.component.scss']
})
export class RatingstarComponent implements OnInit {

  comment: any
  bookStoreArray: any
  value: any;
  id: any;
  booksdata: any;



  constructor(private bookService: BookServiceService, private matSnackBar: MatSnackBar, private router: Router, private dataService: DataService) {
    this.booksdata = this.router.getCurrentNavigation()?.extras.state

  }

  ngOnInit(): void {
    this.getFeedback()
    this.dataService.recevieData.subscribe(
      (response: any) => {
        this.getFeedback();
      })

  }

  feedback() {
    try {
      let data = {
        comment: this.comment,
        rating: this.value
      }

      this.id = this.booksdata.id;

      this.bookService.FeedbackService(data, this.id).subscribe(

        (response: any) => {


          this.dataService.sendData(response);

          this.matSnackBar.open("FeedBack Successfull", '', { duration: 2000, });

        },

        (error: any) => {
          console.log(error);
        });
    }
    catch (error: any) {
      console.log(error.Message)
    }


  }



  getFeedback() {
    try {
      this.bookService.GetFeedbackService(this.booksdata.id).subscribe(
        (response: any) => {

          console.log(response.result)

          this.bookStoreArray = response['result'];

          console.log("getBooksArray", this.bookStoreArray);
          this.bookStoreArray.reverse()

        })
    }
    catch (error: any) {
      console.log(error.Message)
    }


  }

}
