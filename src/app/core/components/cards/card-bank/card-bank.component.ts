import { Component, Input, OnInit } from '@angular/core';
import { ICardBank } from 'src/app/utils/interfaces/card.interfaces';

@Component({
  selector: 'app-card-bank',
  templateUrl: './card-bank.component.html',
  styleUrls: ['./card-bank.component.scss']
})
export class CardBankComponent {

  @Input() cardData!: ICardBank;

}
