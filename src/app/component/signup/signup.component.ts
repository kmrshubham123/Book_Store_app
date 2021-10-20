import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userServices/user.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  hide = true;
  signUpForm! : FormGroup

  constructor(private matSnackBar:MatSnackBar,
             private formBuilder:FormBuilder,
             private userService:UserService,
             ) { }

  ngOnInit(): void{
    this.signUpForm=this.formBuilder.group({
      fullName: ['',[ Validators.required,
                      Validators.minLength(3),
                      Validators.maxLength(20)]],

      email: ['', [Validators.required,
                  Validators.email]],

      password: ['',[Validators.required,    
                  Validators.minLength(8),
                  Validators.maxLength(15)]],

      mobileNo: ['', [Validators.required,   
                    Validators.minLength(10),
                    Validators.maxLength(10)]],

    });
  }

  onSubmit(){
    console.log("onsubmit function is calling  " , this.signUpForm.value);
    let request ={
      fullName: this.signUpForm.value.fullName,
      email:this.signUpForm.value.email,
      password:this.signUpForm.value.password,
      mobileNo:this.signUpForm.value.mobileNo,
      service:"advance"

    }
    console.log(request)
    this.userService.signUpUserService(request).subscribe((response:any)=>{
      console.log(response);
      this.matSnackBar.open("SignUp Successful ", ' ', {
        duration: 3000,
     });
      
    }, (error:any) => {

      console.log(error);
      this.matSnackBar.open("SignUp Unsuccessful ", ' ', {
        duration: 3000,
     });

    })
  }

  
  // convenience getter for easy access to form fields
  get f() { return this.signUpForm.controls; }
}
