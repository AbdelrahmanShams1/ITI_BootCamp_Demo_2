import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  { path: "profile" , component : ProfileComponent},
  { path: "" , component: HomeComponent},
  { path: "shop" , component: CartComponent},
  { path: "detail/:id" , component: DetailsComponent},
  {path: "login" , component:LoginComponent},
  {path:"adminHome", component:AdminPageComponent},
  {path:"edit/:id" , component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
