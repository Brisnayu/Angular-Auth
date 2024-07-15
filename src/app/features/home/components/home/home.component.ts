import { Component, inject, OnInit } from '@angular/core';
import { SessionStorageService } from '../../../../core/services/sessionStorage/session-storage.service';
import { GetsService } from '../../../../core/services/gets/gets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private router = inject(Router);
  private valueUser = inject(SessionStorageService);

  homeUser: string | null = '';

  ngOnInit(): void {
    this.homeUser = this.valueUser.getItem('user');

    console.log(this.homeUser)
  }

  goToAdmin(): void {
    this.router.navigate(['home/admin']);
  }

  goToCustomers(): void {
    this.router.navigate(['home/customer']);
  }


}
