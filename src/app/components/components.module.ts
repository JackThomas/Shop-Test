import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    CartComponent,
    ListComponent,
    ItemComponent,
    CartItemComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    HeroComponent,
    CartComponent,
    ListComponent,
    ItemComponent,
    CartItemComponent,
  ],
})
export class ComponentsModule {}
