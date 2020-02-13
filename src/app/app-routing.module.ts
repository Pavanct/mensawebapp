import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  // please make sure when you add new routes
  {
    path: 'mensaList',
    loadChildren: './components/mensa/mensa.module#MensaModule'
  },
  {
    path: '',
    redirectTo: 'mensaList',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
