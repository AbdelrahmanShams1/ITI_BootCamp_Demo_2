import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../cart.service';
import { LoginAppService } from 'src/app/Srevices/loginApp/login-app.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() inputData: any = {}; 
  @Output() productDeleted = new EventEmitter<any>(); // Emitting deleted product
  isLogin: boolean = false;
  isAdmin: boolean = false; 
  
  constructor(
    private cartService: CartService, 
    private router: Router, 
    private lAdmin: LoginAppService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.lAdmin.isLogin.subscribe((status: boolean) => {
      this.isLogin = status;
    });
    this.lAdmin.isAdmin.subscribe((status: boolean) => {
      this.isAdmin = status; 
    });
  }

  AddToCart(product: any) {
    if (this.isLogin) {
      this.cartService.addToCart(product);
    } else {
      this.router.navigate(['login']);
    }
  }

  editProduct(product: any) {
    this.router.navigate(['/edit', product.id]); 
  }

  deleteProduct(product: any) {
    const confirmation = confirm('Are you sure you want to delete this product?');
    if (confirmation) {
      this.http.delete(`https://fake-api-demo-2-4j1r.vercel.app/data/${product.id}`).subscribe(
        (response) => {
          this.router.navigate(['/'])
          this.productDeleted.emit(product); 
        },
        (error) => {
          this.router.navigate(['/'])
          this.productDeleted.emit(product); 
        }
      );
    }
  }
}
