import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './pages/home/home.component';

const routes: Routes = [
  { path: 'heroes', component: HomeComponent }
];
@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}