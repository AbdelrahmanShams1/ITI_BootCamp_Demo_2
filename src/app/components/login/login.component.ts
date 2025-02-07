import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAppService } from 'src/app/Srevices/loginApp/login-app.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private isadmin: LoginAppService , private cartService :CartService) {}

  
  DataOfUSers = [
    { user: "ahmed", pass: "123", access: "user" },
    { user: "abdo", pass: "1234", access: "admin" },
    { user: "nasr", pass: "123@", access: "user" },
  ];

  
  SubmitForm(res: NgForm) {
    const userName = res.value.userName?.trim();
    const password = res.value.password?.trim();

   
    if (!userName || !password) {
      alert("Please enter both username and password.");
      return;
    }

   
    const isApprovedAdmin = this.DataOfUSers.some(
      user =>
        user.user === userName &&
        user.pass === password &&
        user.access === "admin"
    );

   
    const isApprovedUser = this.DataOfUSers.some(
      user => user.user === userName && user.pass === password
    );

    if (isApprovedAdmin) {
   
      this.router.navigate(['']);
      this.isadmin.setAdminStatus(true);
      this.isadmin.setLogin(true)
      this.cartService.clearCart();
    } else if (isApprovedUser) {
     
      this.router.navigate(['']);
      this.isadmin.setAdminStatus(false);
      this.isadmin.setLogin(true)
      this.cartService.clearCart();
    } else {
      this.isadmin.setLogin(false)
      alert("Login Denied! Incorrect Username or Password.");
    }
  }
}
