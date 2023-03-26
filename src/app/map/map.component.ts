import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { MapboxService } from '../mapbox.service';
import * as mapboxgl from 'mapbox-gl';
import { GeoJson } from '../map';
import { Record } from '../record';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor(private mapService: MapboxService) {}

  @Input() records$: Observable<Record[]> | any;
  @Output() selectPoint: EventEmitter<Record> = new EventEmitter();

  ngOnInit(): void {
    this.mapService.loadMap();
  }

  ngOnChanges() {
    // this.records && this.records.length ? this.setMarkers() : null;
    this.setMarkers();
  }

  setMarkers() {
    this.records$?.subscribe((data: any) => {
      if (data.length && this.mapService.map) {
        this.mapService.geojson.features = [
          ...this.mapService.geojson.features,
          ...this.getFeaturesList(data),
        ];

        this.addLoadedMarkers(this.mapService.geojson.features);
        this.mapService.map.setCenter(
          this.mapService.getMapCenterFromMarkers(data)
        );
      }
    });
  }

  getFeaturesList(records: Record[]) {
    return records.map((r: Record) => {
      return {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
            r.geocode.Longitude.valueOf(),
            r.geocode.Latitude.valueOf(),
          ],
        },
        properties: {
          title: r.name,
          description: `${r.city}, ${r.streetAddress}, ${r.state}`,
          object: r,
        },
      };
    });
  }

  addLoadedMarkers(markersList: GeoJson[]) {
    for (const feature of markersList) {
      const el = document.createElement('div');
      el.className = 'marker';

      let coords: mapboxgl.LngLatLike = [
        feature.geometry.coordinates[0],
        feature.geometry.coordinates[1],
      ];

      const mark = new mapboxgl.Marker(el)
        .setLngLat(coords)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>
            <img src="${feature.properties.object.photo}" alt=${feature.properties.description}>`
          )
        )
        .addTo(this.mapService.map);

      mark.getElement().addEventListener('click', () => {
        this.selectPoint.emit(feature.properties.object);
      });
    }
  }
}
