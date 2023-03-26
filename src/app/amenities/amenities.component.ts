import { Component, OnInit, Input } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css'],
})
export class AmenitiesComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() amenities: string[] | undefined;

  faAngleRight = faAngleRight;

  constructor() {}

  ngOnInit(): void {}
}
