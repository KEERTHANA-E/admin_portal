import { Component } from '@angular/core';
import { ProductService } from '../product.service';
interface product {
  id?: number;
  title: string;
  des: string;
  price: number;
}
interface CartItem {
  e : product;
  quantity: number;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  cart : Array<CartItem>=[];
  // total=this.prodService.returnTotal();
  constructor(public prodService : ProductService){
    console.log("cart component");
    this.cart = this.prodService.cart;
  }
  decreaseCount(cart : CartItem){
    this.prodService.decreaseProdCount(cart);
  }
  increaseCount(cart : CartItem){
    this.prodService.increaseProdCount(cart);
  }
  removeProd(cart : CartItem){
    this.prodService.RemoveProdFromCart(cart);
  }
}
