import { CartItem } from './cart-item';

export interface Cart {
  id: number; // User id
  products: CartItem[];
}
