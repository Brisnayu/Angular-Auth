import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionStorageService } from '../../../../../core/services/sessionStorage/session-storage.service';
import { GetsService } from '../../../../../core/services/gets/gets.service';

@Component({
  selector: 'app-customer-id',
  templateUrl: './customer-id.component.html',
  styleUrl: './customer-id.component.scss'
})
export class CustomerIdComponent {
  private route = inject(ActivatedRoute);
  private valueUser = inject(SessionStorageService);
  private getsServices = inject(GetsService);

  private customerId!: string;
  private token: string | null = '';
  responseGetCustomer!: string;

  ngOnInit(): void {
    this.token = this.valueUser.getItem('token');
    this.getIdAdmin(); 
  }

  getIdAdmin() {
    this.route.paramMap.subscribe((params) => {
      this.customerId = params.get('id')!;
      this.getAdminById(this.customerId);
    });
  }

  getAdminById(id: string) {
    this.getsServices.getAdminById(this.token, id).subscribe(response => {
      console.log(response),
      this.responseGetCustomer = response
    });
  }
}
