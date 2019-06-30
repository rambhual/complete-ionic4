import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { LoadingController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {
  products: any[];
  constructor(
    private productService: ProductService,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(product => {
      this.presentLoading();
      this.products = product;
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait while loading...',
      duration: 2000
    });
    await loading.present();
  }
}
