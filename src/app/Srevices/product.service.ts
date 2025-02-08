import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://fake-api-demo-2-4j1r.vercel.app/data';

  constructor(private http: HttpClient) {}

  addProduct(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }
}
