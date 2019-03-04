import { Component, OnInit, ViewChild } from '@angular/core';
import { MensaService } from 'src/app/services/mensa.service';
import { Mensa } from 'src/app/models/mensa';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'mensalist',
  templateUrl: './mensalist.component.html',
  styleUrls: ['./mensalist.component.scss'],
  providers: [MensaService]
})
export class MensaListComponent implements OnInit {
  public data: Mensa[];
  public dataSource = new MatTableDataSource<Mensa>(this.data);
  public displayedColumns: string[] = ['id', 'name', 'address']; 

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private mensaService: MensaService) {
    mensaService.getCanteens().subscribe((response: [Mensa] )=> {
      console.log(response);
      this.data = response;
    });
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
