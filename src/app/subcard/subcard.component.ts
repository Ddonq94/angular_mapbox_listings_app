import { Component, Input, OnInit } from '@angular/core';
import { MapboxService } from '../mapbox.service';
import { faGlobe, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { Record } from '../record';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import { setRecord } from '../app.actions';

@Component({
  selector: 'app-subcard',
  templateUrl: './subcard.component.html',
  styleUrls: ['./subcard.component.css'],
})
export class SubcardComponent implements OnInit {
  @Input() recordID: number | undefined;

  constructor(
    private mapService: MapboxService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.recordID ? this.getSingleListing(this.recordID) : null;
  }

  fullRecord$ = this.store.select('record');

  faEnvelope = faEnvelope;
  faBuilding = faBuilding;
  faPhone = faPhone;
  faGlobe = faGlobe;
  faLayerGroup = faLayerGroup;
  faHeart = faHeart;

  getSingleListing(recordID: number) {
    this.mapService.getSingleListing(recordID).subscribe((data: any) => {
      this.store.dispatch(setRecord({ record: data }));
    });
  }
}
