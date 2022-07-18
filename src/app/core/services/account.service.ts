import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpRequestService } from './http-request.service';
import { IAccountDataResponse, IFundResponse, ICardBankResponse, IMovementsResponse } from '../../utils/interfaces/requests-http/requests-http.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private httpRequestService: HttpRequestService
  ) { }

  getAccountData(): Observable<any> {
    return this.httpRequestService.get('cuenta').pipe(
      map( ( responseData: IAccountDataResponse ) => {
        return responseData?.cuenta?.[0];
      })
    )
  }

  getFounds(): Observable<any> {
    return this.httpRequestService.get('saldos').pipe(
      map( (responseData: IFundResponse) => {
        return responseData?.saldos?.[0];
      })
    )
  }

  getCards(): Observable<any> {
    return this.httpRequestService.get('tarjetas').pipe(
      map( (responseData: ICardBankResponse) => {
        return responseData.tarjetas;
      })
    )
  }

  getMovementsHistory(): Observable<any> {
    return this.httpRequestService.get('movimientos').pipe(
      map( (responseData: IMovementsResponse) => {
        return responseData.movimientos;
      })
    )
  }
}
