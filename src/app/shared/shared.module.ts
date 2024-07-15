import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtractNumberPipe } from './pipes/extract-number.pipe';
import { CardPrincipalComponent } from './components/card-principal/card-principal.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';



@NgModule({
  declarations: [
    ExtractNumberPipe,
    CardPrincipalComponent,
    CardDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExtractNumberPipe,
    CardDetailsComponent,
    CardPrincipalComponent
  ]
})
export class SharedModule { }
