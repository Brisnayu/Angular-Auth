import { Component, inject, OnInit } from '@angular/core';
import { SessionStorageService } from '../../../../core/services/sessionStorage/session-storage.service';
import { GetsService } from '../../../../core/services/gets/gets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private valueUser = inject(SessionStorageService);
  private getsServices = inject(GetsService);
  private token: string | null = '';

  homeUser: string | null = '';
  responseGetAdmins!: unknown;
  responseGetAdmin!: unknown;
  responseGetEchoping!: unknown;
  responseGetEchoUser!: unknown;
  responseGetCustomers!: unknown;
  responseGetCustomersById!: unknown;


  ngOnInit(): void {
    this.homeUser = this.valueUser.getItem('user');
    this.token = this.valueUser.getItem('token');

    console.log(this.homeUser)
  }

  getAdmins() {
    this.getsServices.getAdmins(this.token).subscribe(response => {
      console.log(response),
      this.responseGetAdmins = response
    });
  }

  getAdminById(id: string) {
    this.getsServices.getAdminById(this.token, id).subscribe(response => {
      console.log(response),
      this.responseGetAdmin = response
    });
  }

  getLoginEchoping() {
    this.getsServices.getLoginEchoping(this.token).subscribe(response => {
      console.log(response),
      this.responseGetEchoping = response
    });
  }

  getLoginEchoUser() {
    this.getsServices.getLoginEchoUser(this.token).subscribe(response => {
      console.log(response),
      this.responseGetEchoUser = response
    });
  }

  getCustomers() {
    this.getsServices.getCustomers(this.token).subscribe(response => {
      console.log(response),
      this.responseGetCustomers = response
    });
  }

  getCustomersById(id: string) {
    this.getsServices.getCustomersById(this.token, id).subscribe(response => {
      console.log(response),
      this.responseGetCustomersById = response
    });
  }
}
