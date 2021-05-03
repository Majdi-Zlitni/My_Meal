import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlateComponent } from './add-plate/add-plate.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MealComponent } from './meal/meal.component';
import { MealsComponent } from './meals/meals.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { ChosenMealComponent } from './chosen-meal/chosen-meal.component';
import { CommandeComponent } from './commande/commande.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyMealComponent } from './my-meal/my-meal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OurfoodComponent } from './ourfood/ourfood.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: 'my-meal', component: MyMealComponent },
  {path:'home', component:HomeComponent},
  {path: '',
  redirectTo: "/home",
  pathMatch: 'full'},
  { path: 'ourfood', component: OurfoodComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contactinfo', component: ContactinfoComponent },
  {path: 'signup', component:SignupComponent},
  { path: 'add-meal', component: AddMealComponent },
  { path: 'order-placed', component: OrderPlacedComponent },
  { path: 'meals', component: MealsComponent },
  {path: 'add-plate', component: AddPlateComponent },
  {path: 'commande', component: CommandeComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    AddPlateComponent,
    OrderPlacedComponent,
    RestaurantComponent,
    MealComponent,
    MealsComponent,
    AddMealComponent,
    ChosenMealComponent,
    CommandeComponent,
    AboutComponent,
    CartComponent,
    ContactinfoComponent,
    ContactusComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    MyMealComponent,
    NavbarComponent,
    OurfoodComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
