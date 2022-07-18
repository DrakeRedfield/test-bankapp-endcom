import { Component, OnInit } from '@angular/core';
import { IAccountData } from 'src/app/utils/interfaces/requests-http/requests-http.interfaces';
import { AccountService } from '../../services/account.service';
import { IAccountDataResponse } from '../../../utils/interfaces/requests-http/requests-http.interfaces';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  accountData: IAccountData = {};

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.accountService.getAccountData().subscribe(
      ( accountData: IAccountData ) => {
        this.accountData = accountData;
        
        this.accountData.ultimaSesion =
          this.setDateFormat(accountData.ultimaSesion);
      }
    )
  }

  setDateFormat( date: string = '' ): string {
    //From 07/07/2019 20:10:55 to 07/07/2019 format
    return date.slice(0,10)
  }

}
