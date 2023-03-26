export interface IParking {
  propertyID: number;
  reserved: boolean;
  reservedFeeMin: number;
  reservedFeeMax: number;
  covered: boolean;
  coveredFeeMin: number;
  coveredFeeMax: number;
  garage: boolean;
  garageFeeMin: number;
  garageFeeMax: number;
  detached: boolean;
  detachedFeeMin: number;
  detachedFeeMax: number;
  breezeway: boolean;
  attached: boolean;
}

export interface ISchoolsInfo {
  propertyID: number;
  district: string;
  elementry: string;
  intermediate: string;
  middle: string;
  high: string;
}

export interface IPetInfo {
  allowed: boolean;
  extraRent: number;
  limit: number;
  weight: number;
  breedRestriction: boolean;
  nonRefundableFee: number;
}

export interface IFloorplan {
  floorplanID: number;
  bed: number;
  bedrooms: number;
  bath: number;
  sqft: number;
  deposit: number;
  photoUrl: string;
  washerDryer: string;
  price: number;
  priceMax: number;
  den: boolean;
  isAvailable: boolean;
  available: Date;
  comments: string;
}

export interface IGeocode {
  Longitude: string;
  Latitude: string;
  Percision: string;
  IsValid: boolean;
}

export interface IManagementOffice {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  headquarters: boolean;
}

export type Record = {
  listID: number;
  propertyID: number;
  yearBuilt: number;
  yearRenovated: number;
  name: string;
  streetAddress: string;
  neighborhood: string;
  phone: string;
  city: string;
  adminFee: number;
  appFee: number;
  url: string;
  favorite: boolean;
  notes: string;
  specials: string;
  parking: IParking;
  schoolsInfo: ISchoolsInfo;
  petInfo: IPetInfo;
  paidUtilities: any[];
  floorplans: IFloorplan[];
  highValueAmenities: string[];
  unitAmenities: string[];
  propertyAmenities: string[];
  geocode: IGeocode;
  photo?: string;
  photos: string[];
  section8: boolean;
  state?: string;
  studentHousting: boolean;
  seniorHousing: boolean;
  officeHours?: string;
  numUnits: number;
  email?: string;
  role: string;
  management?: string;
  managementOffices: IManagementOffice[];
  regionalName: string;
  regionalPhone: string;
  regionalEmail: string;
  onsiteManager: string;
};
