import { Component, inject, OnInit } from '@angular/core';
import { SessionStorageService } from '../../../../core/services/sessionStorage/session-storage.service';
import { GetsService } from '../../../../core/services/gets/gets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  private router = inject(Router);
  private valueUser = inject(SessionStorageService);
  private getsServices = inject(GetsService);

  responseGetAdmins: string[] = [];
  private token: string | null = '';


  ngOnInit(): void {
    this.token = this.valueUser.getItem('token');

    this.getAdmins();
  }

  getAdmins(): void {
    this.getsServices.getAdmins().subscribe(response => {
      console.log(response)
      this.responseGetAdmins = response
    });
  }

  navigateToAdminDetail(adminId: string) {
    this.router.navigate([`home/admin/${adminId}`]);
  }

  goToCustomers() {
    this.router.navigate(['home/customer']);
  }

}
