import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor() {}

  getSymbol(): string {
    return '£';
  }
}
