import { Injectable } from '@angular/core';
interface product{
  id?:number;
  title:string;
  des : string;
  price : number;
}
interface CartItem {
  e : product;
  quantity: number;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Array<product> = [
    {
      id:1,
      title:"earphones",
      des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione optio excepturi temporibus eaque corrupti eligendi quam numquam aperiam repellat, fugiat facere earum, est, saepe veniam consectetur! Suscipit error voluptatem eaque.",
      price : 44.5
    },
    {
      id:2,
      title:"phone",
      des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione optio excepturi temporibus eaque corrupti eligendi quam numquam aperiam repellat, fugiat facere earum, est, saepe veniam consectetur! Suscipit error voluptatem eaque.",
      price : 200.8
    },
    {
      id:3,
      title:"smart watch",
      des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione optio excepturi temporibus eaque corrupti eligendi quam numquam aperiam repellat, fugiat facere earum, est, saepe veniam consectetur! Suscipit error voluptatem eaque.",
      price : 400.7
    },
    {
      id:4,
      title:"laptop",
      des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione optio excepturi temporibus eaque corrupti eligendi quam numquam aperiam repellat, fugiat facere earum, est, saepe veniam consectetur! Suscipit error voluptatem eaque.",
      price : 800
    }
  ]
  cart : Array<CartItem>=[];
  constructor() { }
  createProd(p: product) {
    p.id = this.products.length + 1;
    this.products.push(p);
  }
  editProd(ProdIndex: number,p:product){
    if(this.products[ProdIndex].title===p.title && this.products[ProdIndex].des===p.des && this.products[ProdIndex].price===p.price){
      alert("change any field to update the data");
      return false;
    }
    this.products[ProdIndex].title=p.title;
    this.products[ProdIndex].des=p.des;
    this.products[ProdIndex].price=p.price;
    alert("product updated successfully");
    return true;
  }
  total : number=0;
  returnTotal(){
    return this.total;
  }
  addTocarts(prod : product){
    let flag=0;
    for(let i=0;i<this.cart.length;i++){
      if(this.cart[i].e.title == prod.title){
        this.cart[i].quantity++;
        this.total += this.cart[i].e.price;
        flag=1;
        break;
      }
    }
    if(flag==0){  
      this.cart?.push({e:prod, quantity:1});
      this.total += prod.price;
    }
  }
  increaseProdCount(prod : CartItem){
    prod.quantity++;
    this.total += prod.e.price;
  }
  RemoveProdFromCart(e : CartItem) : void{
    let cartsTmp : CartItem[]=[];
    for(let i=0;i<this.cart.length;i++){
      if(this.cart[i].e.title != e.e.title){
        cartsTmp.push(this.cart[i]);
      }
      else{
        this.total -= ((this.cart[i].e.price)*(this.cart[i].quantity));
        if(this.total <0) this.total=0;
      }
    }
    this.cart=cartsTmp;
  }
  decreaseProdCount(e : CartItem){
    if(e.quantity==1){
      this.RemoveProdFromCart(e);
    }
    else{
      e.quantity--;
    }
    this.total -= (e.e.price);
    if(this.total <0) this.total=0;
  }
}
