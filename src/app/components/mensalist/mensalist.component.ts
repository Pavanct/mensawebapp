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


  constructor(private mensaService: MensaService) {
    if(!localStorage["mensas"]){
    mensaService.getCanteens().subscribe((response: [Mensa] )=> {
      console.log(response);
      this.data = response;
      localStorage.setItem("mensas", JSON.stringify(this.data));
    });
  }else{
    this.data = JSON.parse(localStorage.getItem("mensas"));
  }
   }

  ngOnInit() {
  }

}
