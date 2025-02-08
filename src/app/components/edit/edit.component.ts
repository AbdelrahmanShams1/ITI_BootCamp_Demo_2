import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Srevices/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productForm!: FormGroup;  
  id: number | null = null;
  product: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.id = +id;

     
      this.productForm = this.fb.group({
        name: ['', [Validators.required]],
        des: ['', [Validators.required, Validators.minLength(20)]],
        price: [null, [Validators.required, Validators.min(1)]],
        Qua: [null, [Validators.required, Validators.min(0)]],
        img: ['', [Validators.required]],
        brand: ['', [Validators.required]],
        processor: [''],
        display: [''],
        battery_life: ['', [Validators.required]],
        rating: [null, [Validators.min(0), Validators.max(5)]],
        color: ['', [Validators.required]],
      });

     
      this.http.get(`https://fake-api-demo-2-4j1r.vercel.app/data/${this.id}`).subscribe((res: any) => {
        this.product = res;
        this.populateForm();
      });
    }
  }

  populateForm() {
    if (this.product) {
      this.productForm.patchValue({
        name: this.product.name,
        des: this.product.des,
        price: this.product.price,
        Qua: this.product.Qua,
        img: this.product.img,
        brand: this.product.brand,
        processor: this.product.processor,
        display: this.product.display,
        battery_life: this.product.battery_life,
        rating: this.product.rating,
        color: this.product.color,
      });
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
     
      const updatedProduct = this.productForm.value;
      this.http.patch(`https://fake-api-demo-2-4j1r.vercel.app/data/${this.id}`, updatedProduct).subscribe(
        (response) => {
          alert('Product updated successfully!');
          this.router.navigate(['']);
        },
        (error) => {
         
          this.router.navigate(['']);
        }
      );
    }
  }
}

