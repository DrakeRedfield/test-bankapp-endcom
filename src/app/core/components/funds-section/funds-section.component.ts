import { Component } from '@angular/core';

@Component({
  selector: 'app-funds-section',
  templateUrl: './funds-section.component.html',
  styleUrls: ['./funds-section.component.scss']
})
export class FundsSectionComponent {

  cardDatalist = [
    {
      mount: 1234,
      text: 'SALDO GENERAL EN CUENTAS'
    },
    {
      mount: 1234,
      text: 'TOTAL DE INGRESOS',
      isTextGray: true
    },
    {
      mount: 1234,
      text: 'TOTAL DE GASTOS',
      isTextGray: true
    }
  ];
}
