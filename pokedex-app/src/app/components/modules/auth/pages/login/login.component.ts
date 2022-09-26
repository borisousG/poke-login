import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  message! : string;

  constructor(
    private formBuilder: FormBuilder, 
    public authService : AuthService
    ) { 
      // redirect to home if already logged in
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          userName: ['', Validators.required],
          password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { 
    return this.loginForm.controls; 
  }

  onSubmit() {
    let userName : string = this.loginForm.value.userName.toString();
    let password : string = this.loginForm.value.password.toString();
    
    this.message = (this.authService.saveSession(userName, password)) ? 'Ok' : 'Error';

    this.loginForm.reset();

    // this.authenticationService.login(this.f.userName.value, this.f.password.value)
    //     .pipe(first())
    //     .subscribe(
    //         data => {
    //             this.router.navigate([this.returnUrl]);
    //         },
    //         error => {
    //             this.error = error;
    //             this.loading = false;
    //         });
  }
}
