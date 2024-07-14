import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private userSubject = new BehaviorSubject<string | null>(this.getItem('user'));

  setItem(key: string, value: string): void {
    sessionStorage.setItem(key, value);
    if (key === 'user') {
      this.userSubject.next(value);
    }
  }

  getItem(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  removeIten(key: string): void {
    sessionStorage.removeItem(key);
    if (key === 'user') {
      this.userSubject.next(null);
    }
  }

  clear(): void {
    sessionStorage.clear();
    this.userSubject.next(null);
  }

  getUser() {
    return this.userSubject.asObservable();
  }
}
