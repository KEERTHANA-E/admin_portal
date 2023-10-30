import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ProductComponent } from './product/product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { CartComponent } from './cart/cart.component';
import { MarketComponent } from './market/market.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'dashboard', component: DashboardComponent },
  { 
    path: 'user', 
    component: UserComponent,
    children : [
      {
        path : '',
        component : AllUsersComponent
      },
      {
        path : 'create',
        component : CreateUserComponent
      },
      {
        path : 'edit/:id',
        component : EditUserComponent
      },
      {
        path : ':id',
        component : ViewUserComponent
      }
    ] 
  },
  { 
    path: 'product', 
    component: ProductComponent,
    children : [
      {
        path : '',
        component : AllProductsComponent
      },
      {
        path : 'create',
        component : CreateProductComponent
      },
      {
        path : 'edit/:id',
        component : EditProductComponent
      },
      {
        path : ':id',
        component : ViewProductComponent
      }
    ] 
  },
  {path:'cart',component: CartComponent},
  {path:'market',component: MarketComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
