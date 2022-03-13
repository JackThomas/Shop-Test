import { Cart } from './cart';

export interface User {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  phone: string;
  avatar: string;
  email: string;
  address: {
    country: string;
    city: string;
    zip: string;
    street: string;
  };
  orders: Cart[];
  role: 'ADMIN' | 'CUSTOMER'; // Role is based on i % 2
}
