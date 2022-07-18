import { Component, OnInit } from '@angular/core';
import { IMovements } from 'src/app/utils/interfaces/movements.interfaces';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-movements-table',
  templateUrl: './movements-table.component.html',
  styleUrls: ['./movements-table.component.scss']
})
export class MovementsTableComponent implements OnInit {

  movementsList: IMovements[] = [];

  constructor(
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
      this.getData();
  }

  getData() {
    this.accountService.getMovementsHistory().subscribe( (response: IMovements[]) => {
        this.movementsList = response;
    });
  }

}
