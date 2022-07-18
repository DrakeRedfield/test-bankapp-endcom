import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../core/services/account.service';
import { ICardBank } from '../../utils/interfaces/card.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardList: ICardBank[] = []

  constructor(
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.accountService.getCards().subscribe( (response: ICardBank[]) => {
      this.cardList = response;
    });
  }
}
