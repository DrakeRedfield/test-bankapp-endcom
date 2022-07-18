import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumber'
})
export class CardNumberPipe implements PipeTransform {

  transform(cardNumber: string): string {
    const stringCardNumber = String(cardNumber);

    return stringCardNumber.replace(/\s+/g, '')
           .replace(/(\d{4})/g, '$1 - ')
           .trim()
           .slice(0,-2);
  }

}
