import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from 'src/app/components/components.module';
import { AdminView } from './admin.view';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminView],
  imports: [CommonModule, ComponentsModule, AdminRoutingModule],
})
export class AdminModule {}
