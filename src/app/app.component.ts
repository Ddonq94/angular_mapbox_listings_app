import { Component, OnInit } from '@angular/core';
import { MapboxService } from './mapbox.service';
import { Record } from './record';

import { Store, select } from '@ngrx/store';
import { AppState } from './app-state';
import { addRecord, selectRecord, setAgent } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'smartmap';

  constructor(
    private mapService: MapboxService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.getMarkers();
  }

  recordID$ = this.store.select('recordID');

  records$ = this.store.select((store) => {
    return store.records;
  });

  sideTitle: string | undefined = 'Listings';
  sub: boolean = false;

  getMarkers() {
    this.mapService.getMarkers().subscribe((data: any) => {
      this.store.dispatch(setAgent({ agent: data.agentInfo }));

      data.records.forEach((record: Record) => {
        this.store.dispatch(addRecord({ record }));
      });
    });
  }

  selectPoint(record: Record) {
    this.sideTitle = record.name;
    this.sub = true;
    this.store.dispatch(selectRecord({ recordID: record.propertyID }));

    this.mapService.map.flyTo({
      center: this.getLngLatFromRecord(record),
      zoom: 17,
    });
  }

  returnToList() {
    this.sub = false;
    this.sideTitle = 'Listings';

    this.store.dispatch(selectRecord({ recordID: undefined }));

    this.mapService.map.setZoom(this.mapService.zoom);
    if (this.records$) {
      this.records$.subscribe((data: any) => {
        this.mapService.map.setCenter(
          this.mapService.getMapCenterFromMarkers(data)
        );
      });
    }
  }

  getLngLatFromRecord(record: Record) {
    return [record.geocode.Longitude, record.geocode.Latitude];
  }
}
