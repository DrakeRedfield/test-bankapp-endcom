import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movements-table',
  templateUrl: './movements-table.component.html',
  styleUrls: ['./movements-table.component.scss']
})
export class MovementsTableComponent {

  mockedData = [
        {
            "fecha": "01/07/2019",
            "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "monto": "30.00",
            "tipo": "abono",
            "id": 2
        },
        {
            "fecha": "02/07/2019",
            "descripcion": "Quisque imperdiet massa vel lacus vehicula, a dapibus dolor ullamcorper.",
            "monto": "100.00",
            "tipo": "abono",
            "id": 3
        },
        {
            "fecha": "03/07/2019",
            "descripcion": "Donec posuere ex ut neque auctor varius.",
            "monto": "10.00",
            "tipo": "abono",
            "id": 4
        },
        {
            "fecha": "04/07/2019",
            "descripcion": "Quisque sed ligula quis velit dictum posuere.",
            "monto": "40.00",
            "tipo": "cargo",
            "id": 5
        },
        {
            "fecha": "05/07/2019",
            "descripcion": "Pellentesque interdum leo dignissim ipsum placerat, in fringilla arcu commodo.",
            "monto": "124.00",
            "tipo": "cargo",
            "id": 6
        },
        {
            "fecha": "06/07/2019",
            "descripcion": "Ut sed metus vitae massa faucibus dapibus.",
            "monto": "908.45",
            "tipo": "abono",
            "id": 7
        },
        {
            "fecha": "07/07/2019",
            "descripcion": "Donec scelerisque est at tortor rhoncus dictum.",
            "monto": "34.00",
            "tipo": "abono",
            "id": 8
        },
        {
            "fecha": "08/07/2019",
            "descripcion": "Sed vitae leo scelerisque, auctor dolor non, fringilla metus.",
            "monto": "12.00",
            "tipo": "abono",
            "id": 9
        },
        {
            "fecha": "09/07/2019",
            "descripcion": "In nec metus a justo aliquam efficitur a eu mi.",
            "monto": "67.50",
            "tipo": "cargo",
            "id": 10
        },
        {
            "fecha": "10/07/2019",
            "descripcion": "Fusce dignissim dolor a neque porta pellentesque at vel nulla.",
            "monto": "98.67",
            "tipo": "abono",
            "id": 11
        },
        {
            "fecha": "11/07/2019",
            "descripcion": "Nulla viverra velit eget ullamcorper pretium.",
            "monto": "36.00",
            "tipo": "cargo",
            "id": 12
        },
        {
            "fecha": "12/07/2019",
            "descripcion": "Pellentesque at purus lobortis, varius elit vel, sodales lectus.",
            "monto": "0.50",
            "tipo": "abono",
            "id": 13
        },
        {
            "fecha": "13/07/2019",
            "descripcion": "Integer at eros ornare elit feugiat laoreet sed nec lectus.",
            "monto": "190.10",
            "tipo": "abono",
            "id": 14
        },
        {
            "fecha": "14/07/2019",
            "descripcion": "Aliquam dictum nisi et nibh commodo, blandit sodales magna volutpat.",
            "monto": "200.00",
            "tipo": "cargo",
            "id": 15
        },
        {
            "fecha": "15/07/2019",
            "descripcion": "Integer at eros ornare elit feugiat laoreet sed nec lectus.",
            "monto": "300.00",
            "tipo": "abono",
            "id": 16
        }
    ];

}
