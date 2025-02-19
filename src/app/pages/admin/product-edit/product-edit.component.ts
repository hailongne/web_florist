import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/Product';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss',
})
export class ProductEditComponent implements OnInit {
  product: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    thumbnail: '',
  };
  idEdit: string | number = '';
  productForm: FormGroup = {} as FormGroup;
  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      description: [''],
    });
  }
  ngOnInit(): void {
    this.idEdit = this.route.snapshot.params['id'];
    this.productService.getProductById(this.idEdit).subscribe((product) => {
      console.log(product);
      this.product = product;
      this.productForm.patchValue(product);
    });
  }
  handleSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      // const newData = { ...this.productForm.value, id: this?.id };
      this.productService
        .updateProduct(this.idEdit, this.productForm.value)
        .subscribe((data) => {
          console.log('Edit product successfully!', data);
          this.router.navigate(['/admin']);
          alert('Edit product successfully!');
        });
    }
  }
}
