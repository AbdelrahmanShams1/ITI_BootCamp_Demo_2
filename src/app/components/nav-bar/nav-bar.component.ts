import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAppService } from 'src/app/Srevices/loginApp/login-app.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isAdmin: boolean = false;

  constructor(private router: Router, private lAdmin: LoginAppService) {}

  ngOnInit(): void {
    
    this.lAdmin.isAdmin.subscribe((status: boolean) => {
      this.isAdmin = status;
    });
  }

  RouteToProfile() {
    this.router.navigate(['add']);
  }

  RouteToCart() {
    this.router.navigate(['shop']);
  }

  RouteToBack() {
    this.router.navigate(['/']);
  }

  RouteToLogin(){
    this.isAdmin=false
    this.router.navigate(['login']);
  }
}
