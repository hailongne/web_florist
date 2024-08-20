import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './interfaces/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL);
  }
  getProductById(id: string | number | undefined) {
    return this.http.get<Product>(`${this.baseURL}/${id}`);
  }
  createProduct(product: Product) {
    return this.http.post(`${this.baseURL}`, product);
  }

  updateProduct(id: string | number, product: Product) {
    return this.http.patch(`${this.baseURL}/${id}`, product);
  }

  removeProduct(id: string | number | undefined) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
