import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { IFundData } from '../../../utils/interfaces/requests-http/requests-http.interfaces';

@Component({
  selector: 'app-funds-section',
  templateUrl: './funds-section.component.html',
  styleUrls: ['./funds-section.component.scss']
})
export class FundsSectionComponent implements OnInit {

  cardDatalist = [
    {
      mount: 0,
      text: 'SALDO GENERAL EN CUENTAS'
    },
    {
      mount: 0,
      text: 'TOTAL DE INGRESOS',
      isTextGray: true
    },
    {
      mount: 0,
      text: 'TOTAL DE GASTOS',
      isTextGray: true
    }
  ];

  constructor(
    private accountService: AccountService,
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.accountService.getFounds().subscribe( ( ( fundsData: IFundData ) => {
      this.cardDatalist[0].mount = fundsData.saldoGeneral;
      this.cardDatalist[1].mount = fundsData.ingresos;
      this.cardDatalist[2].mount = fundsData.gastos;
    }));
  }
}
