import { Cart } from './../../interfaces/cart';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from '../data/data.service';
import { catchError } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { CartItem } from 'src/app/interfaces/cart-item';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart: BehaviorSubject<any> = new BehaviorSubject([]);
  public userId: number;

  constructor(private data: DataService, private user: UserService) {
    this.userId = this.user.getUserId();
    this.init();
  }

  /**
   *
   */
  init() {
    this.fetchCart()
      .pipe(catchError((err) => this.createCart()))
      .subscribe((data) => {
        this.cart.next(data);
      });
  }

  /**
   *
   * @returns
   */
  fetchCart() {
    return this.data.get(`carts/${this.userId}`);
  }

  /**
   *
   * @returns
   */
  createCart() {
    return this.data.post('carts', {
      id: this.userId,
      products: [],
    });
  }

  /**
   *
   */
  add(item: any): void {
    const cartData = this.cart.getValue();
    const existingItem = this.existsInCart(item);
    let products: any = [];

    // check item exists in cart
    // if exists, increase quantity
    // else add single item to cart
    if (existingItem) {
      products = cartData.products.map((product: any) => {
        if (product.id === item.id) {
          product.quantity++;
        }
        return product;
      });
    } else {
      products = [
        ...cartData.products,
        {
          id: item.id,
          quantity: 1,
        },
      ];
    }

    this.data.put(`carts/${this.userId}`, { products }).subscribe((data) => {
      this.cart.next(data);
    });
  }

  /**
   *
   * @returns
   */
  remove(item: any) {
    const cartData = this.cart.getValue();

    let products = cartData.products.map((product: CartItem) => {
      if (product.id === item.id) {
        product.quantity--;
      }
      return product;
    });

    products = products.filter((product: CartItem) => product.quantity > 0);

    this.data.put(`carts/${this.userId}`, { products }).subscribe((data) => {
      this.cart.next(data);
    });
  }

  /**
   *
   * @returns
   */
  watch(): Observable<any> {
    return this.cart;
  }

  /**
   *
   * @returns
   */
  existsInCart(newItem: any) {
    const cartData = this.cart.getValue();

    return cartData.products.find((currentItem: any) => {
      return currentItem.id === newItem.id;
    });
  }

  /**
   *
   */
  getTotalQuantity() {
    const cartData = this.cart.getValue();

    const initialQuantity = 0;

    if (cartData.products !== undefined && cartData.products.length > 0) {
      return cartData.products.reduce(
        (previousItem: any, currentItem: any) =>
          previousItem + currentItem.quantity,
        initialQuantity
      );
    }

    return 0;
  }
}
