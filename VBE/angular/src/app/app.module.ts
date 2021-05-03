import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyMealComponent } from './my-meal/my-meal.component';
import { OurfoodComponent } from './ourfood/ourfood.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';



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
  
  

];

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    MyMealComponent,
    OurfoodComponent,
    ContactusComponent,
    AboutComponent,
    ContactinfoComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    SignupComponent,
    CartComponent,
    NavbarComponent,
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
