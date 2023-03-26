import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './card/card.component';
import { HeadComponent } from './head/head.component';
import { SubcardComponent } from './subcard/subcard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AmenitiesComponent } from './amenities/amenities.component';
import { HeadiconComponent } from './headicon/headicon.component';
import { StoreModule } from '@ngrx/store';
import {
  agentReducer,
  recordIDReducer,
  recordReducer,
  recordsReducer,
} from './app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FloorplansComponent } from './floorplans/floorplans.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SidebarComponent,
    CardComponent,
    HeadComponent,
    SubcardComponent,
    AmenitiesComponent,
    HeadiconComponent,
    FloorplansComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    FontAwesomeModule,
    StoreModule.forRoot({
      records: recordsReducer,
      recordID: recordIDReducer,
      record: recordReducer,
      agent: agentReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
