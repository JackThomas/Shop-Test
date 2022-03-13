import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { CurrencyService } from 'src/app/services/currency/currency.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() public product!: Product;

  public price: string = '';

  constructor(private currency: CurrencyService, private cart: CartService) {}

  ngOnInit(): void {
    this.transformPrice();
  }

  /**
   *
   */
  transformPrice(): void {
    const currencySymbol = this.currency.getSymbol();
    const value = this.product.price.toFixed(2);

    this.price = `${currencySymbol}${value}`;
  }

  /**
   *
   */
  addToCart() {
    this.cart.add(this.product);
  }
}
