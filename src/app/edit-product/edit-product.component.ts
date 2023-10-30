import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
interface product{
  id?:number;
  title:string;
  des : string;
  price : number;
}
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  prodData : FormGroup;
  currentData : product | undefined;
  constructor (private activatedRoute : ActivatedRoute, private prodService : ProductService, private router : Router){
    
    
    let PId = this.activatedRoute.snapshot.params['id'];
    let ProdIndex = this.prodService.products.findIndex(
      (p) => p.id == PId);
    this.currentData=this.prodService.products[ProdIndex];


    this.prodData = new FormGroup({
      title: new FormControl(this.currentData.title,[Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)]),
      des: new FormControl(this.currentData.des,Validators.required),
      price: new FormControl(this.currentData.price,Validators.required)
    });
  }
  editProduct(){
    console.log(this.prodData.value);
    if(this.prodData.valid){
    let PId = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.params.subscribe((params) => {
      let ProdIndex = this.prodService.products.findIndex(
        (p) => p.id == PId);
        this.prodService.editProd(ProdIndex,this.prodData.value);
        this.router.navigate(['/product']);
    });
      
    }
  }
}
