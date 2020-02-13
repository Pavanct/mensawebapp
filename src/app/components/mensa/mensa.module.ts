import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';

import { MensaComponent } from './mensa.component';
import { MensaListComponent } from './mensalist/mensalist.component';
import { MensaDetailComponent } from './mensa-detail/mensa-detail.component';
import { MensaRoutingModule } from './mensa-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MensaRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
  ],
  declarations: [
    MensaComponent,
    MensaListComponent,
    MensaDetailComponent,
  ]
})
export class MensaModule { }
