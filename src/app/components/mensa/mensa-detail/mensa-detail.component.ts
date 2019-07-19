import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mensa-detail',
  templateUrl: './mensa-detail.component.html',
  styleUrls: ['./mensa-detail.component.scss']
})
export class MensaDetailComponent implements OnInit {
  @Input() mensaDetail;

  constructor() { }

  ngOnInit() {
  }

}
