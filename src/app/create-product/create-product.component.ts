import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
interface product{
  id?:number;
  title:string;
  des : string;
  price : number;
}
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  prodData : FormGroup;
  constructor (private prodService : ProductService){
    this.prodData = new FormGroup({
      title: new FormControl('',[Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)]),
      des: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required)
    });
  }
  createProduct(){
    console.log(this.prodData.value);
    if(this.prodData.valid){
      this.prodService.createProd(this.prodData.value);
      alert("new product created");
    }
  }
}
