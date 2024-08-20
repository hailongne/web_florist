import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/Product';
import { ProductService } from '../../../product.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  products: Product[] | undefined;
  constructor(private productService: ProductService) {}

  getAll() {
    this.productService.getProducts().subscribe((Data) => {
      this.products = Data;
    });
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  onDelete(id: any) {
    if (confirm('are u sure?')) {
      this.productService.removeProduct(id).subscribe((data) => {
        this.getAll();
      });
    }
  }
}
