import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-principal',
  templateUrl: './card-principal.component.html',
  styleUrl: './card-principal.component.scss'
})
export class CardPrincipalComponent {
  @Input() titlePage: string = '';
  @Input() arrayInfo: string[] = [];

  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>()

  onButtonClick(item: string) {
    this.buttonClicked.emit(item);
  }
}
