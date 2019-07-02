import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'https://pacific-reef-60955.herokuapp.com/products';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.url}`);
  }

  getProduct(productId: string): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/${productId}`);
  }

  deleteProduct(productId: string): Observable<any> {
    return this.httpClient.delete<any>(`{this.url}/${productId}`);
  }
}
