import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { EditComponent } from './components/edit/edit.component';
import { AddProductComponent } from './components/addProduct/add-product/add-product.component';

const routes: Routes = [
  { path: "add" , component : AddProductComponent},
  { path: "" , component: HomeComponent},
  { path: "shop" , component: CartComponent},
  { path: "detail/:id" , component: DetailsComponent},
  {path: "login" , component:LoginComponent},
  {path:"edit/:id" , component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
