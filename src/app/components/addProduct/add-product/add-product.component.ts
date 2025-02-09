import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Srevices/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private rou: Router, private productService: ProductService) {
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
  }

  onSubmit() {
    console.log(this.productForm);
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe({
        next: (response) => {
          this.productForm.reset();
          this.rou.navigate(['/']);
        },
        error: (error) => {
          this.rou.navigate(['/']);
        },
      });
    }
  }
}
