import { Component, inject, OnInit } from '@angular/core';
import { SessionStorageService } from '../../../../../core/services/sessionStorage/session-storage.service';
import { GetsService } from '../../../../../core/services/gets/gets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-id',
  templateUrl: './admin-id.component.html',
  styleUrl: './admin-id.component.scss'
})
export class AdminIdComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private valueUser = inject(SessionStorageService);
  private getsServices = inject(GetsService);

  private adminId!: string;
  private token: string | null = '';
  responseGetAdmin!: string;

  ngOnInit(): void {
    this.token = this.valueUser.getItem('token');
    this.getIdAdmin(); 
  }

  getIdAdmin() {
    this.route.paramMap.subscribe((params) => {
      this.adminId = params.get('id')!;
      this.getAdminById(this.adminId);
    });
  }

  getAdminById(id: string) {
    this.getsServices.getAdminById(id).subscribe(response => {
      console.log(response),
      this.responseGetAdmin = response
    });
  }
}
