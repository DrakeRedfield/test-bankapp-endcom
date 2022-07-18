import { Component, Input } from '@angular/core';
import { IFundCard } from '../../../../utils/interfaces/card.interfaces';

@Component({
  selector: 'app-funds-card',
  templateUrl: './funds-card.component.html',
  styleUrls: ['./funds-card.component.scss']
})
export class FundsCardComponent {

  @Input() cardData!: IFundCard;

}
