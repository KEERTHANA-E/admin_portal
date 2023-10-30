import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
interface product{
  id?:number;
  title:string;
  des : string;
  price : number;
}
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  currentProduct : Array<product> | undefined;
  constructor(private activeRoute: ActivatedRoute,private productService: ProductService){
    console.log(this.activeRoute);
      this.currentProduct = productService.products;
  }
}
