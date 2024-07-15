import { Component, inject, OnInit } from '@angular/core';
import { GetsService } from '../../../../core/services/gets/gets.service';
import { SessionStorageService } from '../../../../core/services/sessionStorage/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {
  private router = inject(Router);
  private valueUser = inject(SessionStorageService);
  private getsServices = inject(GetsService);
  private token: string | null = '';

  responseGetCustomers: string[] = [];

  ngOnInit(): void {
    this.token = this.valueUser.getItem('token');
    this.getCustomers();
  }

  getCustomers(): void {
    this.getsServices.getCustomers().subscribe(response => {
      console.log(response),
      this.responseGetCustomers = response
    });
  }

  navigateToCustomerDetail(adminId: string) {
    this.router.navigate([`home/customer/${adminId}`]);
  }
}
