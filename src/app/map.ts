export interface IAgent {
  accountID: number;
  cómpany: string;
  firstname: string;
  lastname: string;
}

export interface IGeometry {
  type: string;
  coordinates: number[];
}

export interface IProperties {
  title: string;
  description: string;
  object: any;
}

export interface IGeoJson {
  type: string;
  geometry: IGeometry;
  properties?: IProperties | any;
  $key?: string;
}

export class GeoJson implements IGeoJson {
  type = 'Feature';
  geometry: IGeometry;

  constructor(coordinates: number[], public properties: IProperties | any) {
    this.geometry = {
      type: 'Point',
      coordinates: coordinates,
    };
  }
}

export class FeatureCollection {
  type = 'FeatureCollection';
  constructor(public features: Array<GeoJson>) {}
}
