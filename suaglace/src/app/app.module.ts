import { Geolocation } from '@ionic-native/geolocation';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HTTP } from '@ionic-native/http';

import { RinkListPage } from '../pages/rink-list/rink-list';
import { ProfilPage } from '../pages/profil/profil';
import { MapPage } from '../pages/map/map';
import { TabsPage } from '../pages/tabs/tabs';
import { RinkDetailsPage } from './../pages/rink-details/rink-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FiltersPage } from '../pages/filters/filters';
import { FiltersProvider } from '../provider/filters-provider';
import { PlayerListModal } from '../pages/playerList/player-list';
import { RinkProvider } from '../provider/rink-provider';
import { PatinoirePage } from '../pages/patinoire/patinoire';

@NgModule({
  declarations: [
    MyApp,
    RinkListPage,
    ProfilPage,
    MapPage,
    TabsPage,
    RinkDetailsPage,
    FiltersPage,
    PlayerListModal,
    PatinoirePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RinkListPage,
    ProfilPage,
    MapPage,
    TabsPage,
    RinkDetailsPage,
    FiltersPage,
    PlayerListModal,
    PatinoirePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HTTP,
    Geolocation,
    FiltersProvider,
    RinkProvider
  ]
})
export class AppModule { }
