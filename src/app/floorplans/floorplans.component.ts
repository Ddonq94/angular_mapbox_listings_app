import { Component, Input, OnInit } from '@angular/core';
import { Record } from '../record';
import { faBed } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-floorplans',
  templateUrl: './floorplans.component.html',
  styleUrls: ['./floorplans.component.css'],
})
export class FloorplansComponent implements OnInit {
  @Input() record: Record | undefined;

  constructor() {}

  faBed = faBed;

  width: string = '30%';

  ngOnChanges() {
    if (this.record) {
      this.width = `${Math.round(100 / this.record.floorplans.length)}%`;
    }
  }

  ngOnInit(): void {}
}
