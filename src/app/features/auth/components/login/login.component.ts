import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionStorageService } from '../../../../core/services/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private infoLoginApi = inject(FormBuilder);
  private sessionStorageService = inject(SessionStorageService);
  dataForm!: FormGroup;

  ngOnInit(): void {
    this.dataForm = this.infoLoginApi.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })

    console.log("hola?")
  }

  onSubmit() {
    const formData = this.dataForm.value;
    console.log('INFO FORMULARIO', formData)
    this.sessionStorageService.setItem('user', formData.user);
    this.sessionStorageService.setItem('password', formData.password);

    alert('DATOS GUARDADOS EN EL SESSION STORAGE')
  }
}
