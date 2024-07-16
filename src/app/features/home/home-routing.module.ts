import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AdminIdComponent } from './components/admin/admin-id/admin-id.component';
import { CustomerIdComponent } from './components/customer/customer-id/customer-id.component';
import { roleGuard } from '../../core/guards/role/role.guard';
import { UserRole } from '../../core/models/enums/user-role.enum';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    children: [
      { path: '', component: AdminComponent, canActivate: [roleGuard], data: { role: [UserRole.Admin] } },
      { path: ':id', component: AdminIdComponent, canActivate: [roleGuard], data: { role: [UserRole.Admin] } }
    ]
  },
  {
    path: 'customer',
    children: [
      { path: '', component: CustomerComponent, canActivate: [roleGuard], data: { role: [UserRole.User, UserRole.Admin, UserRole.Test] } },
      { path: ':id', component: CustomerIdComponent, canActivate: [roleGuard], data: { role: [UserRole.User, UserRole.Admin, UserRole.Test] } }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
