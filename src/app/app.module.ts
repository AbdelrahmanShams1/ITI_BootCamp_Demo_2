import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { CardsComponent } from './components/cards/cards.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './components/login/login.component'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';
import { AddProductComponent } from './components/addProduct/add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CardsComponent,
    NavBarComponent,
    DetailsComponent,
    HomeComponent,
    LoginComponent,
    EditComponent,
    AddProductComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
