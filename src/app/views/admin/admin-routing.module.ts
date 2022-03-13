import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminView } from './admin.view';

const routes: Routes = [
  {
    path: '',
    component: AdminView,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
