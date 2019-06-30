import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss']
})
export class ProductDetailPage implements OnInit {
  loadedProduct: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ps: ProductService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('productId')) {
        return false;
      }
      const productId = paramMap.get('productId');
      this.ps.getProduct(productId).subscribe(product => {
        this.loadedProduct = product;
      });
    });
  }
}
