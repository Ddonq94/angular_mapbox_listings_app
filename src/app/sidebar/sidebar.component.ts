import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MapboxService } from '../mapbox.service';
import { Record } from '../record';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() records: Record[] | any;

  @Input() title: string | undefined;
  @Input() sub: boolean | undefined;
  @Input() recordID: number | any;

  @Output() selectPoint: EventEmitter<Record> = new EventEmitter();
  @Output() returnToList: EventEmitter<any> = new EventEmitter();

  constructor(public mapService: MapboxService) {}

  goToPoint(record: Record) {
    this.selectPoint.emit(record);
  }

  return() {
    this.returnToList.emit();
  }

  ngOnInit(): void {}
}
