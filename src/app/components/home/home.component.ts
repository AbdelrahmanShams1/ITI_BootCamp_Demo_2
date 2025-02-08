import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'application';
  data: any[] = [];  // Make sure it's typed as an array

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://fake-api-demo-2-4j1r.vercel.app/data').subscribe((res) => {
      this.data = res;  // Ensure data is properly populated
    });
  }

  handleProductDeletion(deletedProduct: any) {
    if (deletedProduct && deletedProduct.id) {
      this.data = this.data.filter(item => item.id !== deletedProduct.id);  
    }
  }
}
