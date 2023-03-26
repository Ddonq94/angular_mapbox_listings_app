import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { Record } from './record';
import { Store } from '@ngrx/store';
import { AppState } from './app-state';

@Injectable({
  providedIn: 'root',
})
export class MapboxService {
  map: any;
  style: string =
    'https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=CH1cYDfxBV9ZBu1lHGqh';
  lat: number = 0;
  lng: number = 0;
  zoom: number = 10;

  baseUrl: string = 'https://app.smartapartmentdata.com/List/json/';

  agent = this.store.select('agent');

  geojson: any = {
    type: 'FeatureCollection',
    features: [],
  };

  constructor(private http: HttpClient, private store: Store<AppState>) {
    // mapboxgl.accessToken = environment.mapbox.accessToken;
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
  }

  loadMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  getMarkers() {
    return this.http.get(
      `${this.baseUrl}listItems.aspx?listID=5363950&token=5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E&receipt=undefined`
    );
  }

  getSingleListing(propertyID: number) {
    return this.http.get(
      `${this.baseUrl}propertyItem.aspx?listID=5363950&token=5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E&propertyID=${propertyID}`
    );
  }

  getMapCenterFromMarkers(records: Record[]): number[] {
    let lats: number[][] = records.map((r: Record) => {
      return [Number(r.geocode.Latitude), Number(r.geocode.Longitude)];
    });

    return this.getLatLngCenter(lats).reverse();
  }

  rad2degr(rad: number) {
    return (rad * 180) / Math.PI;
  }
  degr2rad(degr: number) {
    return (degr * Math.PI) / 180;
  }

  getLatLngCenter(latLngInDegr: number[][]) {
    let LATIDX = 0;
    let LNGIDX = 1;
    let sumX = 0;
    let sumY = 0;
    let sumZ = 0;

    for (let i = 0; i < latLngInDegr.length; i++) {
      let lat = this.degr2rad(latLngInDegr[i][LATIDX]);
      let lng = this.degr2rad(latLngInDegr[i][LNGIDX]);
      // sum of cartesian coordinates
      sumX += Math.cos(lat) * Math.cos(lng);
      sumY += Math.cos(lat) * Math.sin(lng);
      sumZ += Math.sin(lat);
    }

    let avgX = sumX / latLngInDegr.length;
    let avgY = sumY / latLngInDegr.length;
    let avgZ = sumZ / latLngInDegr.length;

    // convert average x, y, z coordinate to latitude and longtitude
    let lng = Math.atan2(avgY, avgX);
    let hyp = Math.sqrt(avgX * avgX + avgY * avgY);
    let lat = Math.atan2(avgZ, hyp);

    return [this.rad2degr(lat), this.rad2degr(lng)];
  }
}
