import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/BookService/book-service.service';
import { DataService } from 'src/app/services/dataService/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  panelOpenState = false;
  cartArray: any = []
  cart:any //indivisual (cart of cartArray)

  
  displayAddress = true;
  displayButton = true;
  displayCart = true;
  displayContinueButton = true;

  addressTypeArray:any=['Home', 'Office', 'Other']
  // addressType = new FormControl(this.addressTypeArray[0]);
  

  quantity: number = 1;

  constructor(private bookService: BookServiceService, private dataService: DataService, private matSnackBar: MatSnackBar,
    private formBuilder: FormBuilder,private router:Router
  ) { }
  CustomerForm! : FormGroup

  ngOnInit(): void {
    this.getcartlist()
    this.dataService.recevieData.subscribe((response: any) => {
      console.log(response);
      this.getcartlist();
    })

    
    this.CustomerForm=this.formBuilder.group({
      fullName: ['',[ Validators.required,
                      Validators.minLength(3),
                      Validators.maxLength(20)]],

      mobileNo: ['', [Validators.required,   
                    Validators.minLength(10),
                    Validators.maxLength(10)]],

      addressType: ['',Validators.required],  

      fullAddress: ['',[Validators.required,    
                      Validators.minLength(8),
                      Validators.maxLength(200)]],


      city: ['',[ Validators.required,
                        Validators.minLength(3),
                        Validators.maxLength(20)]],

      state: ['',[ Validators.required,
                          Validators.minLength(3),
                          Validators.maxLength(20)]],

                                 

    });
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


  removeCart(data: any) {
    console.log("removecartList");
    this.bookService.removeCartlistService(data).subscribe((response: any) => {
      this.cartArray = response['result']
      this.dataService.sendData(response);

    }, error => (
      console.log("removecartList_Error", error)

    ))

  }

  addressToggles() {
    this.displayAddress = false
    this.displayButton = false
  }
  continue() {
    this.displayCart = false
    this.displayContinueButton = false
  }
//  increment-Decrement
  i = 1
  increment(data: { product_id: { quantity: any; }; }) {
    if (this.i != data.product_id.quantity) {
      this.i++;
      this.quantity = this.i;
      console.log(data.product_id.quantity);
    }
  }
  decrement() {
    if (this.i != 1) {
      this.i--;
      this.quantity = this.i;
      console.log(this.quantity);
    }
  }



    onSubmit(){
    console.log("onsubmit function is calling  " , this.CustomerForm.value);
    let data ={
      fullName: this.CustomerForm.value.fullName,
      mobileNo:this.CustomerForm.value.mobileNo,
      addressType:this.CustomerForm.value.addressType,
      fullAddress:this.CustomerForm.value.fullAddress,
      city:this.CustomerForm.value.city,
      state:this.CustomerForm.value.state,
     
      service:"advance"


    }
    console.log(data)
    this.bookService.customerDetailService(data).subscribe((response:any)=>{
      console.log(response);
      this.matSnackBar.open("Details Successful ", ' ', {
        duration: 3000,
     });
      
    }, (error:any) => {

      console.log(error);
      this.matSnackBar.open("Unsuccessful ", ' ', {
        duration: 3000,
     });

    })
  }

  
  // convenience getter for easy access to form fields
  get f() { return this.CustomerForm.controls; }

  checkout(){
    this.cart = this.cart;
    
    let orders:Array<any>=[]
  
    for(this.cart of this.cartArray){
      
      let order = {
        "product_id": this.cart.product_id._id,
        "product_name": this.cart.product_id.bookName,
        "product_quantity": this.cart.product_id.quantity,
        "product_price": this.cart.product_id.price,
      }
      
      orders.push(order)
    }
    let OrderDetails={
  
      orders: orders
    }
    console.log(OrderDetails)
    this.bookService.bookcheckoutService(OrderDetails).subscribe(
      (response:any)=>{ 
        console.log(response)
        this.matSnackBar.open("successfully ordered",'',{ duration: 3000,});
        this.router.navigateByUrl('dashboard/orderplaced');
        
      },
      error=>{
        console.log(error);
        this.matSnackBar.open("Order UnSuccessfull",'',{ duration: 3000,});
      })
  }
  // continueShopping(){
  //   this.router.navigate(['/dashboard/orderplaced']);
  // }



}
