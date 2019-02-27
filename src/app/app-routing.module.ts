import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensaListComponent } from './components/mensalist/mensalist.component';

const routes: Routes = [
  { path: 'mensaList', component: MensaListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
