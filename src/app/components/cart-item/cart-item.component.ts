import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { CurrencyService } from 'src/app/services/currency/currency.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() public itemId!: number;
  @Input() public quantity!: number;

  public product!: Product;
  public price: string = '';

  constructor(
    private currency: CurrencyService,
    private cart: CartService,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.data.get(`products/${this.itemId}`).subscribe((data: Product) => {
      this.product = data;
      this.transformPrice();
    });
  }

  /**
   *
   */
  transformPrice(): void {
    const currencySymbol = this.currency.getSymbol();
    const value = (this.product.price * this.quantity).toFixed(2);

    this.price = `${currencySymbol}${value}`;
  }

  /**
   *
   */
  removeFromCart() {
    this.cart.remove(this.product);
  }
}
