import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any[] = [];
  cartSubject = new BehaviorSubject<any[]>(this.cart);

  getCart() {
    return this.cartSubject.asObservable();
  }

  addToCart(product: any) {
    const exists = this.cart.findIndex((item) => item.id === product.id);
    if (exists === -1) {
      this.cart.push(product);
      this.cartSubject.next(this.cart);
    }
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter((item) => item.id !== productId); 
    this.cartSubject.next(this.cart); 
  }

  clearCart() {
    this.cart = [];
    this.cartSubject.next(this.cart);
  }
}
