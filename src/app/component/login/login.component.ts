import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userServices/user.service';
import { Router } from '@angular/router'; //import from app-routing.ts

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
show:boolean=false;

  hide = true;
  loginForm!: FormGroup


  constructor(private matSnackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,
      Validators.email]],

      password: ['', [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15)]],
    });
  }

  onSubmitUser() {
    console.log("User Login  ", this.loginForm.value);
    let request = {

      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      service: "advance"

    }
    console.log(request)
    this.userService.loginUserService(request).subscribe((response: any) => {
      console.log(response);

      localStorage.setItem("token", response.result.accessToken);
      this.router.navigateByUrl('/dashboard/getbooks')

      this.matSnackBar.open("Login Successful ", ' ', {
        duration: 3000,
      });

    }, (error: any) => {

      console.log(error);
      this.matSnackBar.open("Login Unsuccessful ", ' ', { duration: 3000, });

    })
  }


  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmitAdmin() {
    console.log("Admin Login  ", this.loginForm.value);
    let request = {

      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      service: "advance"

    }
    console.log(request)
    this.userService.AdminloginService(request).subscribe((response: any) => {
      console.log(response);

      localStorage.setItem("token", response.result.accessToken);
      this.router.navigateByUrl('/admindashboard/admingetbooks')

      this.matSnackBar.open("AdminLogin Successful ", ' ', { duration: 3000, });

    }, (error: any) => {

      console.log(error);
      this.matSnackBar.open("AdminLogin Unsuccessful ", ' ', { duration: 3000, });

    })
    
  }
    // convenience getter for easy access to form fields
    get fn() { return this.loginForm.controls; }


  

}
