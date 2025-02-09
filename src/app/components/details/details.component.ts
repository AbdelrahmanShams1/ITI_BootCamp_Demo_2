import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../cart.service'; 
import { LoginAppService } from 'src/app/Srevices/loginApp/login-app.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number | null = null;
  product: any;
  data: any = [];
  isLogin: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router,
    private lAdmin: LoginAppService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.id = +id; 
      this.http.get("https://fake-api-demo-2-4j1r.vercel.app/data").subscribe((res) => {
        this.data = res;
        this.getProductDetails(); 
      });
    }

    this.lAdmin.isLogin.subscribe((status: boolean) => {
      this.isLogin = status;
    });

    this.lAdmin.isAdmin.subscribe((status: boolean) => {
      this.isAdmin = status;
    });
  }

  getProductDetails() {
    this.product = this.data.find((item: any) => item.id === this.id);
  }

  AddToCart(product: any) {
    if (this.isLogin) {
      this.cartService.addToCart(product);
    } else {
      this.router.navigate(['login']);
    }
  }

  deleteProduct(product: any) {
    const confirmation = confirm('Are you sure you want to delete this product?');
    if (confirmation) {
      this.http.delete(`https://fake-api-demo-2-4j1r.vercel.app/data/${product.id}`).subscribe(
        (response) => {
          this.router.navigate(['']); 
        },
        (error) => {
          this.router.navigate(['']); 
        }
      );
    }
  }
}
