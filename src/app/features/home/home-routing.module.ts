import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AdminIdComponent } from './components/admin/admin-id/admin-id.component';
import { CustomerIdComponent } from './components/customer/customer-id/customer-id.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { 
    path: 'admin',
    children: [
      { path: '', component: AdminComponent }, 
      { path: ':id', component: AdminIdComponent } 
    ]
  },
  { 
    path: 'customer', 
    children: [
      { path: '', component: CustomerComponent }, 
      { path: ':id', component: CustomerIdComponent } 
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
