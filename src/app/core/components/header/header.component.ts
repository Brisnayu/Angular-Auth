import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SessionStorageService } from '../../services/sessionStorage/session-storage.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private sessionStorage = inject(SessionStorageService);
  private router = inject(Router);
  userSessionStorage: string | null = '';
  private subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.sessionStorage.getUser().subscribe(user => {
      this.userSessionStorage = user;
      console.log(this.userSessionStorage);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  clickOut(): void {
    alert('La información será eliminada del Session Storage')
    this.sessionStorage.clear();
    this.router.navigate(['/login'])
  }
}
