import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RushComponent } from './rush/rush.component';
import { HealthyComponent } from './healthy/healthy.component';
import { PastaComponent } from './pasta/pasta.component';
import { Page4Component } from './page4/page4.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'rush' , component: RushComponent},
  { path: 'healthy', component: HealthyComponent},
  { path: 'Pasta', component: PastaComponent},
  {path:'',component: Page4Component},
  {path:'checkout', component:CheckoutComponent}
  

];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RushComponent,
    HealthyComponent,
    PastaComponent,
    Page4Component,
    CheckoutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
