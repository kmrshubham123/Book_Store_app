import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/services/BookService/book-service.service';
import { DataService } from 'src/app/services/dataService/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 token:any
 hidden = false;
 cartArray:any=[]
  constructor(private router:Router, private bookService:BookServiceService,private dataService:DataService) { }

  ngOnInit(): void {
    this.getcartlist()
    this.dataService.recevieData.subscribe((response: any) => {
      console.log(response);
      this.getcartlist();
    })
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  logout(){
  localStorage.removeItem('token')
  this.router.navigateByUrl('/home')
  }

  getcartlist() {
    console.log("getcart");
    this.bookService.getCartService().subscribe((response: any) => {
      this.cartArray = response['result']
      console.log("Getting cart data ", this.cartArray);
     

    }, error => (
      console.log("getcartlist", error)
    ))

  }


}
