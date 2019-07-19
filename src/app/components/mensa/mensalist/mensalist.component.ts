import { Component, OnInit, ViewChild } from '@angular/core';
import { MensaService } from 'src/app/services/mensa.service';
import { Mensa } from 'src/app/models/mensa';
import { MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { Router} from '@angular/router';

@Component({
  selector: 'mensalist',
  templateUrl: './mensalist.component.html',
  styleUrls: ['./mensalist.component.scss'],
  providers: [MensaService]
})
export class MensaListComponent implements OnInit {
  public data: Mensa[];
  public dataSource: MatTableDataSource<Mensa>;
  public displayedColumns: string[] = ['id', 'name', 'address'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private mensaService: MensaService,
              private router: Router
              ) {
    mensaService.getCanteens().subscribe((response: [Mensa] ) => {
      this.data = response;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
   }

   applyFilter(filterVlaue: string) {
    this.dataSource.filter = filterVlaue.trim().toLowerCase();
   }

   onClick() {
     console.log('row clicked');
   }

  ngOnInit() {

  }

}
