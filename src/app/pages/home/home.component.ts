import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  dataMocked = [
      {
          "tarjeta": "5439240112341234",
          "nombre": "Berenice Garcia Lopez",
          "saldo": 1500,
          "estado": "activa",
          "tipo": "titular",
          "id": 2
      },
      {
          "tarjeta": "5439240112341235",
          "nombre": "Lilly Silva Martinez",
          "saldo": 500,
          "estado": "desactivada",
          "tipo": "titular",
          "id": 3
      }
  ]

}
