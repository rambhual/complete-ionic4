import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss']
})
export class ProductDetailPage implements OnInit {
  loadedProduct: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ps: ProductService,
    private router: Router,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('productId')) {
        this.router.navigate(['/products']);
        return false;
      }
      const productId = paramMap.get('productId');
      this.ps.getProduct(productId).subscribe(product => {
        this.loadedProduct = product;
      });
    });
  }

  onDeleteProduct(productId: string) {
    this.alertController.create({
      header: 'Are you sure!',
      message: 'Do you really want to delete!',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Delete',
          handler: () => {
            this.ps.deleteProduct(productId);
            this.router.navigate(['/products']);
          }
        }
      ]
    });
  }
}
