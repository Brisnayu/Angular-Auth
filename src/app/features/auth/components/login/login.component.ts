import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionStorageService } from '../../../../core/services/sessionStorage/session-storage.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private infoLoginApi = inject(FormBuilder);
  private router = inject(Router);
  private sessionStorageService = inject(SessionStorageService);
  private authService = inject(AuthService);
  dataForm!: FormGroup;

  ngOnInit(): void {
    this.dataForm = this.infoLoginApi.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    const formData = this.dataForm.value;
    console.log('INFO FORMULARIO', formData);

    this.onLogin(formData.user, formData.password);
  }

  onLogin(user: string, password: string): void {
    this.authService.verifyUser(user, password).subscribe(
      response => {
        console.log('User verified', response);
        console.log(typeof response)

        this.sessionStorageService.setItem('user', user);
        this.sessionStorageService.setItem('password', password);
        this.sessionStorageService.setItem('token', response);

        alert('DATOS GUARDADOS EN EL SESSION STORAGE');

        this.router.navigate(['home']);
      },
      error => {
        console.error('Verification failed', error);
        alert('Error en la autenticación');
        window.location.reload()
      }
    );
  }
}
