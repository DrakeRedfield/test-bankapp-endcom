import { Component, OnInit } from '@angular/core';
import { IMenuOption } from '../../../utils/interfaces/menu.interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuOptions: IMenuOption[] = [
    {
      text:'MIS CUENTAS',
      isSelected: true
    },
    {
      text:'ENVIAR DINERO',
      isSelected: false
    }
  ]
}
