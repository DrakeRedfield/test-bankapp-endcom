import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewCardModalComponent } from 'src/app/core/components/modals/new-card-modal/new-card-modal.component';
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
    private accountService: AccountService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.accountService.getCards().subscribe( (response: ICardBank[]) => {
      this.cardList = response;
    });
  }

  addNewCard() {
    this.modalService.open(NewCardModalComponent, {
      size: "md",
      centered: true,
      backdrop: true
    });
  }
}
