import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userServices/user.service';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.scss']
})
export class AdminregistrationComponent implements OnInit {

  hide = true;
  registrationForm! : FormGroup

  constructor(private matSnackBar:MatSnackBar,
             private formBuilder:FormBuilder,
             private userService:UserService,
             ) { }

  ngOnInit(): void{
    this.registrationForm=this.formBuilder.group({
      fullName: ['',[ Validators.required,
                      Validators.minLength(3),
                      Validators.maxLength(20)]],

      email: ['', [Validators.required,
                  Validators.email]],

      password: ['',[Validators.required,    
                  Validators.minLength(8),
                  Validators.maxLength(15)]],

      phone: ['', [Validators.required,   
                    Validators.minLength(10),
                    Validators.maxLength(10)]],

    });
  }

  onSubmit(){
    console.log("onsubmit function is calling  " , this.registrationForm.value);
    let request ={
      fullName: this.registrationForm.value.fullName,
      email:this.registrationForm.value.email,
      password:this.registrationForm.value.password,
      phone:this.registrationForm.value.phone,
      service:"advance"

    }
    console.log(request)
    this.userService.AdminRegistrationService(request).subscribe((response:any)=>{
      console.log(response);
      this.matSnackBar.open("AdminSignUp Successful ", ' ', {
        duration: 3000,
     });
      
    }, (error:any) => {

      console.log(error);
      this.matSnackBar.open("AdminSignUp Unsuccessful ", ' ', {
        duration: 3000,
     });

    })
  }

  
  // convenience getter for easy access to form fields
  get f() { return this.registrationForm.controls; }

}
