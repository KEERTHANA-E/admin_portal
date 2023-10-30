import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
interface product {
  id?: number;
  title: string;
  des: string;
  price: number;
}
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  currentProduct!: product ;
  constructor(private activeRoute: ActivatedRoute, private productService: ProductService) {
    console.log(this.activeRoute);
    let PId = this.activeRoute.snapshot.params['id'];
    this.activeRoute.params.subscribe((params) => {
      let ProdIndex = this.productService.products.findIndex(
        (p) => p.id == PId);
        this.currentProduct = this.productService.products[ProdIndex];
    });
  }
  buyNow(product : product ){
    console.log("adding to cart");
    this.productService.addTocarts(product);
  }
}
