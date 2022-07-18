import { ICardBank } from "../card.interfaces";
import { IMovements } from "../movements.interfaces";

export interface IAccountData {
  cuenta?: number;
  nombre?: string;
  ultimaSesion?: string;
  id?: number;
}

export interface IAccountDataResponse {
    cuenta: IAccountData[];
}

export interface IFundData {
  cuenta: number;
  saldoGeneral: number;
  ingresos: number;
  gastos: number;
  id: number;
}

export interface IFundResponse {
    saldos: IFundData[];
}

export interface ICardBankResponse {
    tarjetas: ICardBank;
}

export interface IMovementsResponse {
    movimientos: IMovements[];
}