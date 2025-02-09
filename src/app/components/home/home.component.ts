import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'application';
  data: any[] = [];

  constructor(private http: HttpClient, private router : Router , private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.http
      .get<any[]>('https://fake-api-demo-2-4j1r.vercel.app/data')
      .subscribe((res) => {
        this.data = res;
      });
  }

  handleProductDeletion(deletedProduct: any) {
    if (deletedProduct && deletedProduct.id) {
      this.data = this.data.filter((item) => item.id !== deletedProduct.id);

      this.cdr.detectChanges();

      this.http
        .delete(
          `https://fake-api-demo-2-4j1r.vercel.app/data/${deletedProduct.id}`
        )
        .subscribe(() => {
        this.router.navigate(['/'])
        });
    }
  }
}
