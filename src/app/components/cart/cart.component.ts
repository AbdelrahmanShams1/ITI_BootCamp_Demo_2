import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  arr: any[] = []; 

  constructor(private cartService: CartService) {} 

  ngOnInit() {
    this.cartService.getCart().subscribe((data) => {
      this.arr = data.map(product => ({
        ...product,
        count: product.count || 1  
      }));
    });
  }

  AddToCart(product: any) {
    this.cartService.addToCart(product); 
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }
   
  add(product: any) {
    if(product.Qua >  product.count)
    product.count++; 
  }

  remove(product: any) {
    if (product.count > 1) {
      product.count--;
    }
  }
}
