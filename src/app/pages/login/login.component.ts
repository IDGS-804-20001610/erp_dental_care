import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(public api: ApiService, private formBuilder: FormBuilder, private router: Router,) {
  }

  login: any = {"email": '', "password": ''};
  returnUrl: string = '';

  loginForm = this.formBuilder.group({
    email: null,
    password: null,
  });

  ngOnInit() {
  }

  onSubmitLogin() {
    console.log(this.loginForm.value);
    
    this.api.login(this.loginForm.value).subscribe((response) => {
      console.log(response);
      
      if (response['message'].includes("User logged successfully")) {

        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('role', response['role']);
        localStorage.setItem('token', response['token']);

        switch (localStorage.getItem('role')) {
          case 'ADMIN':
            this.returnUrl = 'pages/admin/patients'
            break;
          case 'PATIENT':
            this.returnUrl = 'pages/patient/home'
            break;
          case 'DENTIST':
            this.returnUrl = 'pages/dentist/home'
            break;
        }
        this.router.navigate([this.returnUrl]);
      } else {
        console.log("error");
        
      }
    }, (e)=>console.log("ERROR",e)
    );
    this.loginForm.reset();
  }
}
