export interface IFundCard {
    mount: number;
    text: string;
    isTextGray?: boolean;
}

export interface ICardBank {
  tarjeta: string;
  nombre: string;
  saldo: number;
  estado: string;
  tipo: string;
  id: number;
}