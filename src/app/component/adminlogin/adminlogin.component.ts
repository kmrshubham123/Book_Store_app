import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userServices/user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  hide = true;
  AdminloginForm! : FormGroup

  constructor(private matSnackBar:MatSnackBar,
    private formBuilder:FormBuilder,
    private userService:UserService ) { }

  ngOnInit(): void {
    this.AdminloginForm=this.formBuilder.group({
      email: ['', [Validators.required,
                  Validators.email]],

      password: ['',[Validators.required,    
                  Validators.minLength(8),
                  Validators.maxLength(15)]],
    });
  }

  onSubmit(){
    console.log("onsubmit function is calling  " , this.AdminloginForm.value);
    let request ={
      
      email:this.AdminloginForm.value.email,
      password:this.AdminloginForm.value.password,
      service:"advance"

    }
    console.log(request)
    this.userService.AdminloginService(request).subscribe((response:any)=>{
      console.log(response);

      localStorage.setItem("token",response.result.accessToken);
      // this.router.navigateByUrl('/dashboard/getbooks')

      this.matSnackBar.open("AdminLogin Successful ", ' ', {duration: 3000,});
      
    }, (error:any) => {

      console.log(error);
      this.matSnackBar.open("AdminLogin Unsuccessful ", ' ', {duration: 3000,});

    })
    
  }


    // convenience getter for easy access to form fields
    get f() { return this.AdminloginForm.controls; }


}
