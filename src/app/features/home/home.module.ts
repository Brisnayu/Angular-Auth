import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AdminIdComponent } from './components/admin/admin-id/admin-id.component';
import { SharedModule } from '../../shared/shared.module';
import { CustomerIdComponent } from './components/customer/customer-id/customer-id.component';



@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    CustomerComponent,
    AdminIdComponent,
    CustomerIdComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
