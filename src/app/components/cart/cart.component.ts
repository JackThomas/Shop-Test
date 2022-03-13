import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart/cart.service';
import { CurrencyService } from 'src/app/services/currency/currency.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public initialised: boolean = false;
  public items: any[] = [];
  public totalQuantity: number = 0;
  public totalCost: number = 0;
  public costFormatted!: string;

  constructor(private currency: CurrencyService, private cart: CartService) {}

  ngOnInit(): void {
    this.cart.watch().subscribe((data: Cart) => {
      this.items = data.products;
      this.totalQuantity = this.cart.getTotalQuantity();
      this.initialised = true;
    });
  }
}
