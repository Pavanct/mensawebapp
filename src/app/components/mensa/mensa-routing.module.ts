import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MensaComponent } from './mensa.component';
import { MensaListComponent } from './mensalist/mensalist.component';
import { MensaDetailComponent } from './mensa-detail/mensa-detail.component';

const mensalistRoutes: Routes = [
  {
    path: '',
    component: MensaComponent,
    children: [
      {
        path: '',
        component: MensaListComponent
      },
      {
        path: 'mensa-detail',
        component: MensaDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mensalistRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MensaRoutingModule {
}
