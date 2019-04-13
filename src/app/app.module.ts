import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
// import { LoginComponent } from './pages/login/login.component';

// const appRoutes: Routes = [
//   { path: 'home', component:  HomeComponent},
// ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // LoginComponent
  ],
  imports: [
    // appRoutes,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
