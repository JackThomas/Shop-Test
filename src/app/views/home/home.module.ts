import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/app/components/components.module';
import { HomeView } from './home.view';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeView],
  imports: [CommonModule, ComponentsModule, HomeRoutingModule],
})
export class HomeModule {}
