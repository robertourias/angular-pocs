import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public url = 'http://localhost:3000/data';

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<ProductModel[]>(`${this.url}/products`);
  }
}
